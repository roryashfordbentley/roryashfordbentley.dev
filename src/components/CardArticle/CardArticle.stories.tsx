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
export const Core: Story = {
  args: {
    title: 'This is a blog post title, its kinda long',
    description: 'This is the description',
    date: '07/02/2025',
    url: '/#test',
    imageSrc: './story-images/climber-800-450.jpg',
    imageAlt: 'A rock climber on an indoor boulder problem (V2 in my gym)',
  },
}
