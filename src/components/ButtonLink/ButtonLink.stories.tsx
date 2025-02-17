import type { Meta, StoryObj } from '@storybook/react'

import { ButtonLink } from './ButtonLink'
type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonLink>

export default meta

export const Core: Story = {
  args: {
    url: 'https://www.roryashfordbentley.dev',
    target: '_blank',
    label: 'Example button',
  },
}
