import type { Meta, StoryObj } from '@storybook/nextjs'

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

export const Default: Story = {
  args: {
    url: 'https://www.roryashfordbentley.dev',
    target: '_blank',
    label: 'Button Text',
  },
}

export const Secondary: Story = {
  args: {
    url: 'https://www.roryashfordbentley.dev',
    target: '_blank',
    label: 'Button Text',
    type: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    url: 'https://www.roryashfordbentley.dev',
    target: '_blank',
    label: 'Button Text',
    type: 'tertiary',
  },
}

export const Outline: Story = {
  args: {
    url: 'https://www.roryashfordbentley.dev',
    target: '_blank',
    label: 'Button Text',
    type: 'outline',
  },
}
