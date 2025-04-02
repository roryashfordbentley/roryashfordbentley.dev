import type { Meta, StoryObj } from '@storybook/react'

import { BlogSummary } from './BlogSummary'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlogSummary',
  component: BlogSummary,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogSummary>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
