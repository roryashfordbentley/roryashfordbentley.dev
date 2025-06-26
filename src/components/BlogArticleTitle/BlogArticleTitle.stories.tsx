import type { Meta, StoryObj } from '@storybook/nextjs'

import { BlogArticleTitle } from './BlogArticleTitle'
import Image from 'next/image'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlogArticleTitle',
  component: BlogArticleTitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogArticleTitle>

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Key changes in WCAG 2.2: What you need to know',
    description:
      '2024 saw the official announcement and adoption of WCAG 2.2 which brings a range of additional considerations and updates.',
    datePostedLabel: 'Posted',
    datePosted: '2025-03-06T10:28:13.749Z',
    readingTimeLabel: 'Reading Time',
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
