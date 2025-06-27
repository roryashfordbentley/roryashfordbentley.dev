import type { Meta, StoryObj } from '@storybook/nextjs'

import { BlogMasthead } from './BlogMasthead'
import Image from 'next/image'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlogMasthead',
  component: BlogMasthead,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogMasthead>

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Payload CMS - the NextJS WordPress alternative',
    description:
      '2024 saw the official announcement and adoption of WCAG 2.2 which brings a range of additional considerations and updates.',
    datePosted: '2025-03-06T10:28:13.749Z',
    readingTime: '5 Minutes',
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
