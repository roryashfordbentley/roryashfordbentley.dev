import type { Meta, StoryObj } from '@storybook/react'

import { BlockWrapper } from './BlockWrapper'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlockWrapper',
  component: BlockWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlockWrapper>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
