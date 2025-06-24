import type { Meta, StoryObj } from '@storybook/nextjs'

import { ImagesRow } from './ImagesRow'
import Image from 'next/image'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/ImagesRow',
  component: ImagesRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImagesRow>

export default meta

export const TwoImages: Story = {
  args: {
    layout: 'row',
    images: Array(2).fill(
      <Image
        src={'./story-images/mac-500-500.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={450}
        height={800}
      />,
    ),
  },
}

export const ThreeImages: Story = {
  args: {
    layout: 'row',
    images: Array(3).fill(
      <Image
        src={'./story-images/mac-500-500.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={450}
        height={800}
      />,
    ),
  },
}

export const FourImages: Story = {
  args: {
    layout: 'row',
    images: Array(4).fill(
      <Image
        src={'./story-images/mac-500-500.jpg' as string}
        alt={'Featured Image Alt Text'}
        width={450}
        height={800}
      />,
    ),
  },
}
