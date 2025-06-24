import type { Meta, StoryObj } from '@storybook/nextjs'

import { HTMLRenderer } from './HTMLRenderer'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/HTMLRenderer',
  component: HTMLRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HTMLRenderer>

export default meta

export const Default: Story = {
  args: {
    html: '<p>Hey this is some test ocntent to ensure that HTML can be rendered</p>',
  },
}
