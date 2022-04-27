import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '103rem', margin: '0 auto' }}>
    <Footer />
  </div>
)

Default.parameters = {
  backgrounds: {
    default: 'white'
  }
}
