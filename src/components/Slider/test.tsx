import 'macth-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'

import Slider from '.'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

describe('<Slider />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Slider settings={settings}>
        <p>teste 1</p>
        <p>teste 2</p>
      </Slider>
    )
    expect(
      screen.getByText(/teste 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
    expect(
      screen.getByText(/teste 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
  })
})
