import type { Meta, StoryObj } from '@storybook/nextjs'

import { TableOfContents } from './TableOfContents'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableOfContents>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
