import type { Meta, StoryObj } from '@storybook/react'

import { Content } from './Content'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Utility/Content',
  component: Content,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Content>

export default meta

export const Default: Story = {
  args: {
    children: 'This is example text',
  },
}
