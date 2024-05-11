import { Button } from '.'
import { StoryObj, Meta } from '@storybook/react'
import { Text } from '../Text'
import { fn } from '@storybook/test'

const meta = {
  title: 'Base Components/Button',
  component: Button
} as Meta

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: (
      <Text as="span" variant="copy1">
        Hello, world!
      </Text>
    ),
    onClick: fn(),
    variant: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    children: (
      <Text as="span" variant="copy1">
        Hello, world!
      </Text>
    ),
    onClick: fn(),
    variant: 'secondary'
  }
}
