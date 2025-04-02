import type { Meta, StoryObj } from '@storybook/react'

import { Slider, Slide } from './Slider'
import { CardArticle } from '@components/CardArticle/CardArticle'
import { Default as CardArticleDefault } from '@components/CardArticle/CardArticle.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta

export const Default: Story = {
  args: {
    children: [
      <Slide>
        <CardArticle {...CardArticleDefault.args} />
      </Slide>,
      <Slide>
        <CardArticle {...CardArticleDefault.args} />
      </Slide>,
      <Slide>
        <CardArticle {...CardArticleDefault.args} />
      </Slide>,
    ],
  },
}
