import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
}

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />
