import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'
import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

// Get the Default Stories to reuse here
import { Default as LogoLinkDefault } from '@components/LogoLink/LogoLink.stories'
import { Default as MainNavDefault } from '@components/MainNav/MainNav.stories'

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
    logo: <LogoLink {...LogoLinkDefault.args} />,
    navMenu: <MainNav {...MainNavDefault.args} />,
    themeToggle: <ThemeToggle />,
  },
}
