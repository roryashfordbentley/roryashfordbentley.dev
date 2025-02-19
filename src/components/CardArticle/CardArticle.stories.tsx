import type { Meta, StoryObj } from '@storybook/react'

import { CardArticle } from './CardArticle'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/CardArticle',
  component: CardArticle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardArticle>

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'This is a blog post title, its kinda long',
    date: '07/02/2025',
    url: '/#test',
    imageSrc: './story-images/climber-800-450.jpg',
    imageAlt: 'A rock climber on an indoor boulder problem (V2 in my gym)',
  },
}

export const Featured: Story = {
  args: {
    title: 'Godot game engine: thoughts from a first time game developer.',
    description:
      'I take a look at what the experience is like for someone coming in as a beginner and share my thoughts on why I recommend Godot as a great beginner friendly engine to use.',
    date: '07/02/2025',
    url: '/#test',
    imageSrc: './story-images/climber-800-450.jpg',
    imageAlt: 'A rock climber on an indoor boulder problem (V2 in my gym)',
    type: 'featured',
  },
}

export const Compact: Story = {
  args: {
    title: 'This is a blog post title, its kinda long',
    url: '/#test',
    imageSrc: './story-images/climber-800-450.jpg',
    imageAlt: 'A rock climber on an indoor boulder problem (V2 in my gym)',
    type: 'compact',
  },
}
