import type { Meta, StoryObj } from '@storybook/react'

import { MobileNav } from './MobileNav'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/MobileNav',
  component: MobileNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNav>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
