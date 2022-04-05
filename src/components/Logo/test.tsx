import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import theme from 'styles/theme'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo component with balck color by default', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText('Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveStyle(`color: ${theme.colors.black}`)
  })

  it('should render the Logo component with white color when passed props', () => {
    renderWithTheme(<Logo color="white" />)

    const logo = screen.getByLabelText('Logo')
    expect(logo).toHaveStyle(`color: ${theme.colors.white}`)
  })

  it('should render the bigger Logo by default', () => {
    renderWithTheme(<Logo />)

    const logo = screen.getByLabelText('Logo')
    expect(logo).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    })
  })

  it('should render the less Logo by passed size small', () => {
    renderWithTheme(<Logo size="small" />)

    const logo = screen.getByLabelText('Logo')
    expect(logo).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    })
  })

  it('should hide on mobile when passed hideOnMobile props', () => {
    renderWithTheme(<Logo hideOnMobile />)
    const logo = screen.getByLabelText('Logo')
    expect(logo).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
