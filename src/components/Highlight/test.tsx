import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Highlight from '.'

const props = {
  title: 'Read Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  img: '/img/Background.png',
  floatImage: '/img/floatDesk.png',
  labelButton: 'Buy now'
}

describe('<Highlight />', () => {
  it('should render the elements', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Read Dead it’s back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Come see John’s new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /floatImage/i })).toHaveAttribute(
      'src',
      `${props.floatImage}`
    )

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      `${props.img}`
    )

    expect(screen.getByText(`${props.labelButton}`)).toBeInTheDocument()
  })

  it('should render the correct styles', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveStyle({
      gridTemplateAreas: "'floatImage description'",
      gridTemplateColumns: '1.3fr 2fr'
    })
  })

  it('should render the float image on the right if passed by props', () => {
    renderWithTheme(<Highlight {...props} positionFloatImage="right" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveStyle({
      gridTemplateAreas: "'description floatImage'",
      gridTemplateColumns: '2fr 1.3fr'
    })
  })
})
