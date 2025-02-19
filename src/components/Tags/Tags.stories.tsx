import type { Meta, StoryObj } from '@storybook/react'

import { Tags } from './Tags'
import { Tag } from '@components/Tag/Tag'
import { Default as TagDefault } from '@components/Tag/Tag.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Tags',
  component: Tags,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tags>

export default meta

export const Default: Story = {
  args: {
    children: Array(18).fill(<Tag {...TagDefault.args} />),
  },
}
