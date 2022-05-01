import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/test/helpers'

import Banner from '.'

const props = {
  img: '/img/bannerimg.png',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('img', { name: /Defy death/i })).toHaveAttribute(
      'src',
      '/img/bannerimg.png'
    )
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/Play the new /i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/games/defy-death'
    )
  })

  it('should render Ribbon component when passed by props', () => {
    renderWithTheme(<Banner {...props} withRibbon="Best seller" />)

    expect(screen.getByLabelText('Ribbon')).toBeInTheDocument()
    expect(screen.getByText(/Best seller/i)).toBeInTheDocument()
  })

  it('should render Ribbon with extraLarge size when passed by props', () => {
    renderWithTheme(
      <Banner {...props} withRibbon="Best seller" ribbonSize="extraLarge" />
    )

    expect(screen.getByLabelText('Ribbon')).toHaveStyle({
      height: '4rem',
      fontSize: theme.font.sizes.large,
      right: '-2.2rem'
    })
  })
})
