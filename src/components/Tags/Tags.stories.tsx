import type { Meta, StoryObj } from '@storybook/nextjs'

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
      <Tag label="Javascript" link="https://google.com" />,
      <Tag label="React" link="https://google.com" />,
      <Tag label="NextJs" link="https://google.com" />,
      <Tag label="Web development" link="https://google.com" />,
      <Tag label="Climbing" link="https://google.com" />,
      <Tag label="Accessibility" link="https://google.com" />,
      <Tag label="Godot" link="https://google.com" />,
      <Tag label="Astro" link="https://google.com" />,
      <Tag label="CSS" link="https://google.com" />,
      <Tag label="Javascript" link="https://google.com" />,
      <Tag label="Javascript" link="https://google.com" />,
      <Tag label="React" link="https://google.com" />,
      <Tag label="NextJs" link="https://google.com" />,
      <Tag label="Web development" link="https://google.com" />,
      <Tag label="Climbing" link="https://google.com" />,
    ],
  },
}
