import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />

Default.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}
Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
}
