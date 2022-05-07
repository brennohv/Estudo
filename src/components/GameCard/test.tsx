import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import userEvent from '@testing-library/user-event'

import GameCard from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Read Dead Redemption',
  slug: 'testeHREF',
  developer: 'Rockstar Games',
  price: '$215,00'
}

describe('<GameCard />', () => {
  it('should render elements', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/game/testeHREF')
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByLabelText('favButton')).toBeInTheDocument()
    expect(screen.getByLabelText('addToWishlist')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: props.price })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Add shopingCart')).toBeInTheDocument()
  })

  it('should render promotiopnal price when passed by props', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="$200,00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecorationLine: 'line-through'
    })

    expect(screen.getByRole('button', { name: '$200,00' })).toBeInTheDocument()
  })

  it('should click in favButton and change the favorite state.', () => {
    renderWithTheme(<GameCard {...props} />)

    userEvent.click(screen.getByLabelText('favButton'))
    expect(screen.getByLabelText('removeFromWishlist')).toBeInTheDocument()
  })

  it('should render Ribbon when passed by props.', () => {
    renderWithTheme(<GameCard {...props} ribbon="teste" />)

    expect(screen.getByLabelText('Ribbon')).toBeInTheDocument()
  })
})
