import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '41rem',
      height: '23rem',
      background: '#2E2F42'
    }}
  >
    <Ribbon {...args} />
  </div>
)

Default.args = {
  children: 'Buy now',
  size: 'large'
}
