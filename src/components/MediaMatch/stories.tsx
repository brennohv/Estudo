import { Story, Meta } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greatherThan="medium">Show on desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Show on mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
