import type { Meta, StoryObj } from '@storybook/react'

import { PageWrapper } from './PageWrapper'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/PageWrapper',
  component: PageWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageWrapper>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
