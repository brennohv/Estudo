import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/test/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading with black color, and size by default', () => {
    renderWithTheme(<Heading>Teste</Heading>)
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: `${theme.colors.black}`,
      fontSize: `${theme.font.sizes.xxlarge}`
    })

    expect(heading).toHaveStyleRule('font-size', '2.4rem', {
      media: '(max-width: 768px)'
    })
  })

  it('should render the heading with white color and small size by passed via props', () => {
    renderWithTheme(
      <Heading color="white" size="small">
        Teste
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toHaveStyle({
      color: `${theme.colors.white}`,
      fontSize: `${theme.font.sizes.medium}`
    })
  })

  it('should render the borderLeft in Heading', () => {
    renderWithTheme(<Heading borderLeft>teste</Heading>)
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
  })

  it('should render the borderBottom in heading', () => {
    renderWithTheme(<Heading borderBottom>teste</Heading>)
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })
})
