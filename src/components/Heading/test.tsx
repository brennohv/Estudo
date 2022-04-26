import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/test/helpers'

import Heading from '.'

describe('<Heading />', () => {
  // LARGE SIZE, BLACK COLOR
  it('should render the heading with black color, and large size by default', () => {
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
  // MEDIUM SIZE
  it('should render the heading with medium size passed by props', () => {
    renderWithTheme(<Heading size="medium">Teste</Heading>)
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toHaveStyle({
      fontSize: `2.4rem`
    })
  })

  // SMALL SIZE, WHITE COLOR
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

    expect(heading).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  // BORDER LEFT
  it('should render the borderLeft in Heading', () => {
    renderWithTheme(<Heading borderLeft>teste</Heading>)
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })
  })

  // BORDER BOTTOM
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

  // BORDERBOTTOM WITH SECONDARY COLOR
  it('should render borderBottom with secondary color when passed by colorBorderBottom props', () => {
    renderWithTheme(
      <Heading borderBottom colorBorderBottom="secondary">
        teste
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /teste/i })

    expect(heading).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })
})
