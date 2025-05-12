import type { Meta, StoryObj } from '@storybook/react'

import { RadialInfo } from './RadialInfo'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/RadialInfo',
  component: RadialInfo,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadialInfo>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
