import type { Meta, StoryObj } from '@storybook/nextjs'

import { MobileNavLink } from './MobileNavLink'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/MobileNavLink',
  component: MobileNavLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNavLink>

export default meta

export const Default: Story = {
  args: {
    href: '#/fake',
    title: 'Homepage',
  },
}
