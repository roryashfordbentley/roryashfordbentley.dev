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

const tagTitle = [
  'Javascript',
  'React',
  'NextJs',
  'Web development',
  'Climbing',
  'Accessibility',
  'Godot',
  'Astro',
  'CSS',
]

export const Default: Story = {
  args: {
    children: [
      <Tag label="Javascript" />,
      <Tag label="React" />,
      <Tag label="NextJs" />,
      <Tag label="Web development" />,
      <Tag label="Climbing" />,
      <Tag label="Accessibility" />,
      <Tag label="Godot" />,
      <Tag label="Astro" />,
      <Tag label="CSS" />,
      <Tag label="Javascript" />,
      <Tag label="Javascript" />,
      <Tag label="React" />,
      <Tag label="NextJs" />,
      <Tag label="Web development" />,
      <Tag label="Climbing" />,
    ],
  },
}
