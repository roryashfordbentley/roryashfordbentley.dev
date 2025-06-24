import type { Meta, StoryObj } from '@storybook/nextjs'

import { LogoLink } from './LogoLink'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/LogoLink',
  component: LogoLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoLink>

export default meta

export const Default: Story = {
  args: {
    link: 'https://www.roryashfordbentley.dev',
  },
}
