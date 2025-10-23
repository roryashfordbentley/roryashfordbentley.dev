import type { Meta, StoryObj } from '@storybook/nextjs'

import { SectionTitle } from './SectionTitle'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>

export default meta

export const Default: Story = {
  args: {
    title: 'Blog',
    description:
      'Writing about my interests and hobbies, covering everything from JavaScript guides to Yorkshire climbing recommendations',
  },
}
