import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './Slider'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
