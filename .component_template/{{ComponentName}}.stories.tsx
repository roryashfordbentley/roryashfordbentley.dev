import type { Meta, StoryObj } from '@storybook/react'

import { BlogArticleTitle } from './{{ComponentName}}'
import Image from 'next/image'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/{{ComponentName}}',
  component: {{ComponentName}},
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof {{ComponentName}}>

export default meta;

export const Core: Story = {
  args: {
    example: 'This is example text',
  },
}
