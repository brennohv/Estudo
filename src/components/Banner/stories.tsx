import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div
    style={{ maxWidth: '104.2rem', margin: '0 auto', borderRadius: '0.4rem' }}
  >
    <Banner {...args} />
  </div>
)

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
}

export const WithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{ maxWidth: '104.2rem', margin: '0 auto', borderRadius: '0.4rem' }}
  >
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  withRibbon: 'Bestseller',
  ribbonSize: 'extraLarge'
}
