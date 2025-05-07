import type { Meta, StoryObj } from '@storybook/react'

import { SocialNav } from './SocialNav'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/SocialNav',
  component: SocialNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialNav>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
