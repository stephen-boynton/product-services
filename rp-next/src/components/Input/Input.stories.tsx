import { Input } from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Base Components/Input',
  component: Input,
  decorators: [
    (Story: any) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Input',
    id: 'primary-input'
  }
}
