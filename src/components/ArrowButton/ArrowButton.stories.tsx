import type { Meta, StoryObj } from '@storybook/nextjs'

import { ArrowButton } from './ArrowButton'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/ArrowButton',
  component: ArrowButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ArrowButton>

export default meta

export const Next: Story = {
  args: {
    title: 'Next',
  },
}

export const NextDisabled: Story = {
  args: {
    title: 'Next',
    disabled: true,
  },
}

export const Previous: Story = {
  args: {
    title: 'Previous',
    type: 'prev',
  },
}

export const PreviousDisabled: Story = {
  args: {
    title: 'Previous',
    type: 'prev',
    disabled: true,
  },
}
