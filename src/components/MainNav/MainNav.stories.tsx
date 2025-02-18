import type { Meta, StoryObj } from '@storybook/react'

import { MainNav } from './MainNav'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/MainNav',
  component: MainNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainNav>

export default meta

export const Default: Story = {
  args: {
    navItems: [
      {
        id: 1,
        page: {
          slug: 'home',
          title: 'Home',
        },
      },
      {
        id: 2,
        page: {
          slug: 'work',
          title: 'Work',
        },
      },
      {
        id: 3,
        page: {
          slug: 'blog',
          title: 'Blog',
        },
      },
    ],
  },
}
