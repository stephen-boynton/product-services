import { Form } from './'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Base Components/Form',
  component: Form
} as Meta

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    inputs: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Password', name: 'password', type: 'password' }
    ],
    onSubmit: (formData) => console.log(formData)
  }
}
