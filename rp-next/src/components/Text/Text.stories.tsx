import { Text } from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Form/Text',
  component: Text,
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span'],
      control: { type: 'select' }
    },
    variant: {
      options: ['display', 'order1', 'order2', 'copy1', 'copy2'],
      control: { type: 'select' }
    }
  }
} as Meta

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    as: 'h1',
    children: 'Hello, world!',
    variant: 'display'
  }
}
