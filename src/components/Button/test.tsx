import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import theme from 'styles/theme'
import Button from '.'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

describe('<Button />', () => {
  it('should render the normal size button by default', () => {
    renderWithTheme(<Button>Add to cart</Button>)
    const button = screen.getByRole('button', { name: /Add to cart/i })

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      width: '12.2rem',
      height: '4rem'
    })
  })

  it('should render the small size button by passed via props', () => {
    renderWithTheme(<Button size="small">Add to cart</Button>)
    const button = screen.getByRole('button', { name: /Add to cart/i })

    expect(button).toHaveStyle({
      padding: `${theme.spacings.xxsmall}`,
      height: '3rem'
    })
  })

  it('should render the large size button by passed via props', () => {
    renderWithTheme(<Button size="large">Add to cart</Button>)
    const button = screen.getByRole('button', { name: /Add to cart/i })

    expect(button).toHaveStyle({
      width: '15rem',
      height: '5rem'
    })
  })

  it('should render width 100% when passed fullwidth props', () => {
    renderWithTheme(
      <Button size="large" fullWidth>
        Add to cart
      </Button>
    )
    const button = screen.getByRole('button', { name: /Add to cart/i })

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('should render shoppingCart icon and padding left in span', () => {
    renderWithTheme(
      <Button
        size="small"
        icon={<AddShoppingCart aria-label="Add shoppingCart" />}
      >
        Add to cart
      </Button>
    )

    expect(screen.getByLabelText(/Add shoppingCart/i)).toBeInTheDocument()
    expect(screen.getByText('Add to cart')).toHaveStyle({
      marginLeft: '0.8rem'
    })
  })

  it('should render button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/store">
        link
      </Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/store'
    )
    expect(screen.getByRole('link', { name: /link/i })).toHaveStyle({
      textDecoration: 'none'
    })
  })
})
