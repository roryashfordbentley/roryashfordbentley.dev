import type { Meta, StoryObj } from '@storybook/nextjs'

import { Tag } from './Tag'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta

export const Default: Story = {
  args: {
    label: 'Javascript',
  },
}
