import type { Meta, StoryObj } from '@storybook/react'

import { VideoEmbed } from './VideoEmbed'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/VideoEmbed',
  component: VideoEmbed,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VideoEmbed>

export default meta

export const Default: Story = {
  args: {
    videoURL: 'https://www.youtube-nocookie.com/embed/b6OvrRbGU68',
  },
}
