import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Read Dead Redemption',
    slug: 'testeHREF',
    developer: 'Rockstar Games',
    price: '$215,00'
  },
  parameters: {
    backgrounds: {
      default: 'MainBg'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />

export const WithRibbon: Story<GameCardProps> = (args) => (
  <GameCard {...args} ribbon="Best Price" />
)

export const PromotionalPrice: Story<GameCardProps> = (args) => (
  <GameCard {...args} />
)

PromotionalPrice.args = {
  promotionalPrice: '$200,00'
}
