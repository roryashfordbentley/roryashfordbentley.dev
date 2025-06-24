import type { Meta, StoryObj } from '@storybook/nextjs'

import { WireframeBox } from './WireframeBox'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Utility/WireframeBox',
  component: WireframeBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WireframeBox>

export default meta

export const Default: Story = {
  args: {
    title: 'Wireframe Box',
    content:
      'This is a wireFrame box used for debugging layouts and as a helper for visualising invisible components (IE Grid systems) in Storybook.',
  },
}
