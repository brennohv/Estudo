import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/test/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the children', () => {
    renderWithTheme(<Ribbon>Buy now</Ribbon>)

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
  })

  it('should render secondary color and large size by default', () => {
    renderWithTheme(<Ribbon>Buy now</Ribbon>)
    expect(screen.getByText(/Buy now/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      height: '3.3rem',
      fontSize: theme.font.sizes.small,
      right: '-1.4rem'
    })

    expect(screen.getByText(/buy now/i)).toHaveStyleRule(
      'border-right-width',
      '1.4rem',
      { modifier: '::after' }
    )

    expect(screen.getByText(/buy now/i)).toHaveStyleRule(
      'border-top-width',
      '0.8rem',
      { modifier: '::after' }
    )

    expect(screen.getByText(/buy now/i)).toHaveStyleRule('top', '3.3rem', {
      modifier: '::after'
    })
  })

  it('should render primary color and extraLarge size passed by props', () => {
    renderWithTheme(
      <Ribbon size="extraLarge" color="primary">
        Buy now
      </Ribbon>
    )
    expect(screen.getByText(/Buy now/i)).toHaveStyle({
      backgroundColor: theme.colors.primary,
      height: '4rem',
      fontSize: theme.font.sizes.large,
      right: '-2.2rem'
    })
  })

  it('should render small size passed by props', () => {
    renderWithTheme(<Ribbon size="small">Buy now</Ribbon>)
    expect(screen.getByText(/Buy now/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      height: '2.4rem',
      fontSize: theme.font.sizes.xsmall,
      right: '-1.3rem'
    })
  })
})
