import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })

  it('should open/close menu when cliked in Menu SVG', () => {
    renderWithTheme(<Menu />)
    const menuFull = screen.getByRole('navigation', { hidden: true })

    // Verificando se está o menuFull esta fechado por padrão
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: '0' })

    //Clicando no open menu e verificando se abre o menuFull
    fireEvent.click(screen.getByLabelText(/^open menu/i))
    expect(menuFull.getAttribute('aria-hidden')).toBe('false')
    expect(menuFull).toHaveStyle({ opacity: '1' })

    //fechando menu
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(menuFull.getAttribute('aria-hidden')).toBe('true')
    expect(menuFull).toHaveStyle({ opacity: '0' })
  })

  it('should not render the wishlist and my account and render registerBox when logged out', () => {
    renderWithTheme(<Menu />)
    expect(
      screen.queryByRole('link', { name: /My account/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /Wishlist/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Log in now', hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the wishlist and my account but does not render RegisterBox', () => {
    renderWithTheme(<Menu userName="Brenno" />)

    expect(
      screen.getByRole('link', { name: /My account/i, hidden: true })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Wishlist/i, hidden: true })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Log in now', hidden: true })
    ).not.toBeInTheDocument()
  })
})
