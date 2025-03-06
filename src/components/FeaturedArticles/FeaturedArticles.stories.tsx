import type { Meta, StoryObj } from '@storybook/react'

import { FeaturedArticles } from './FeaturedArticles'
import { CardArticle } from '../CardArticle/CardArticle'
import { Featured, Compact } from '@components/CardArticle/CardArticle.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/FeaturedArticles',
  component: FeaturedArticles,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FeaturedArticles>

export default meta

export const Default: Story = {
  args: {
    title: 'The latest from the blog.',
    articlePrimary: <CardArticle {...Featured.args} />,
    articleSecondary: <CardArticle {...Compact.args} />,
    articleTertiary: <CardArticle {...Compact.args} />,
  },
}
