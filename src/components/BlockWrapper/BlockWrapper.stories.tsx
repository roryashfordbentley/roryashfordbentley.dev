import type { Meta, StoryObj } from '@storybook/react'

import { BlockWrapper } from './BlockWrapper'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Utility/BlockWrapper',
  component: BlockWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlockWrapper>

export default meta

export const Default: Story = {
  args: {
    children: 'Content goes here',
  },
}

export const Padded: Story = {
  args: {
    children: 'Content goes here',
    layout: 'padded',
  },
}
