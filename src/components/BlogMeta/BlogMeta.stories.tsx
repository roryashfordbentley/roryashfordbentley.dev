import type { Meta, StoryObj } from '@storybook/react'

import { BlogMeta } from './BlogMeta'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlogMeta',
  component: BlogMeta,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogMeta>

export default meta

export const Default: Story = {
  args: {
    datePosted: '2025-03-06T10:28:13.749Z',
    readingTime: '5 Minutes',
  },
}
