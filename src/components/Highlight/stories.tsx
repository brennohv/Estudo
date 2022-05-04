import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    img: '/img/Background.png',
    floatImage: '/img/floatDesk.png',
    labelButton: 'Buy now'
  }
} as Meta

export const Mobile: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '41.4rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)
Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile2'
  }
}

export const Desktop: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104.2rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)
