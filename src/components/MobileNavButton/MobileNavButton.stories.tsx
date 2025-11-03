import type { Meta, StoryObj } from '@storybook/nextjs'

import { MobileNavButton } from './MobileNavButton'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/MobileNavButton',
  component: MobileNavButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNavButton>

export default meta

export const Default: Story = {
  args: {
    toggle: false,
    onClick: () => console.log('MobileNavButton clicked'),
  },
}

export const Toggled: Story = {
  args: {
    toggle: true,
    onClick: () => console.log('MobileNavButton clicked'),
  },
}
