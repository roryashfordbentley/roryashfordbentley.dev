import type { Meta, StoryObj } from '@storybook/react'

import { Wrapper } from './Wrapper'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
