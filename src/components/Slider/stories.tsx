import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settingsHorizontal = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const settingsVertical = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true
}

const Teste = styled.div`
  width: 30rem;
  background-color: black;
  color: white;
  padding: 10rem;
  border: 0.5rem solid red;
`

export const Horizontal: Story = () => (
  <Slider settings={settingsHorizontal}>
    <Teste>1</Teste>
    <Teste>2</Teste>
    <Teste>3</Teste>
    <Teste>4</Teste>
    <Teste>5</Teste>
    <Teste>6</Teste>
  </Slider>
)

export const Vertical: Story = () => (
  <Slider settings={settingsVertical}>
    <Teste>1</Teste>
    <Teste>2</Teste>
    <Teste>3</Teste>
    <Teste>4</Teste>
    <Teste>5</Teste>
    <Teste>6</Teste>
  </Slider>
)
