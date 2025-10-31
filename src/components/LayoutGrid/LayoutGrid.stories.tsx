import type { Meta, StoryObj } from '@storybook/nextjs'

import { LayoutGrid } from './LayoutGrid'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/LayoutGrid',
  component: LayoutGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutGrid>

export default meta

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
