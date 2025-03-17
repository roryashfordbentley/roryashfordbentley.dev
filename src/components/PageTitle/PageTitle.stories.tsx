import type { Meta, StoryObj } from '@storybook/react'

import { PageTitle } from './PageTitle'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageTitle>

export default meta

export const Default: Story = {
  args: {
    title: 'Blog',
  },
}
