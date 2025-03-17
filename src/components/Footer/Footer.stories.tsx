import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './Footer'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
