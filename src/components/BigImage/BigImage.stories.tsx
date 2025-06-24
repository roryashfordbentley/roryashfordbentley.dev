import type { Meta, StoryObj } from '@storybook/nextjs'
import Image from 'next/image'

import { BigImage } from './BigImage'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BigImage',
  component: BigImage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BigImage>

export default meta

export const Default: Story = {
  args: {
    image: (
      <Image
        src={'./story-images/mac-1500-844.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={1500}
        height={830}
      />
    ),
  },
}

export const Caption: Story = {
  args: {
    image: (
      <Image
        src={'./story-images/mac-1500-844.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={1500}
        height={830}
      />
    ),
    caption: 'A majestic Mac seen in its natural habitat.',
  },
}

export const Credit: Story = {
  args: {
    image: (
      <Image
        src={'./story-images/mac-1500-844.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={1500}
        height={830}
      />
    ),
    credit: 'Photo by John Doe via Unsplash',
  },
}

export const CreditLink: Story = {
  args: {
    image: (
      <Image
        src={'./story-images/mac-1500-844.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={1500}
        height={830}
      />
    ),
    credit: 'Photo by John Doe via Unsplash',
    creditLink: 'https://unsplash.com',
  },
}

export const CaptionAndCredit: Story = {
  args: {
    image: (
      <Image
        src={'./story-images/mac-1500-844.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={1500}
        height={830}
      />
    ),
    caption: 'A majestic Mac seen in its natural habitat.',
    credit: 'Photo by John Doe',
  },
}
