import type { Meta, StoryObj } from '@storybook/nextjs'

import { MobileNav } from './MobileNav'
import { SocialNav } from '@components/SocialNav/SocialNav'

import { Default as SocialNavDefault } from '@components/SocialNav/SocialNav.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/MobileNav',
  component: MobileNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNav>

export default meta

export const Default: Story = {
  args: {
    toggle: true,
    items: [
      {
        page: {
          slug: '#home',
          title: 'Home',
        },
      },
      {
        page: {
          slug: '#home',
          title: 'About',
        },
      },
      {
        page: {
          slug: '#home',
          title: 'HBlog',
        },
      },
    ],
    socialItems: <SocialNav {...SocialNavDefault.args} />,
  },
}
