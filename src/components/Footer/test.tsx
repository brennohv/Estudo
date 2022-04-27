import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading inside column', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Address/i })
    ).toBeInTheDocument()
  })

  it('should render only 2 columns and 4 columns for desktop view', () => {
    renderWithTheme(<Footer />)

    const wrapper = screen.getByRole('heading', {
      name: /Contact/i
    }).parentElement?.parentElement

    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(2,1fr)')
    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(4,1fr)', {
      media: '(min-width: 768px)'
    })
  })
})
