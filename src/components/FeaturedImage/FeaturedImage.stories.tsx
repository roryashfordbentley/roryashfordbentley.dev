import type { Meta, StoryObj } from '@storybook/react'

import { FeaturedImage } from './FeaturedImage'
import Image from 'next/image'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/FeaturedImage',
  component: FeaturedImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FeaturedImage>

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    image: (
      <Image
        src={'./story-images/climber-1500-844.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={1330}
        height={750}
      />
    ),
  },
}
