import type { Meta, StoryObj } from '@storybook/nextjs'

import { Header } from './Header'
import { MainNav } from '@components/MainNav/MainNav'
import { SocialNav } from '@components/SocialNav/SocialNav'

// Get the Default Stories to reuse here
import { Default as MainNavDefault } from '@components/MainNav/MainNav.stories'
import { Default as SocialNavDefault } from '@components/SocialNav/SocialNav.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

export const Default: Story = {
  args: {
    navMenu: <MainNav {...MainNavDefault.args} />,
    socialMenu: <SocialNav {...SocialNavDefault.args} />,
  },
}
