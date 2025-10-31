import type { Meta, StoryObj } from '@storybook/nextjs'

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

export default meta

export const Default: Story = {
  args: {
    children: Array(3).fill(
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    ),
  },
}
