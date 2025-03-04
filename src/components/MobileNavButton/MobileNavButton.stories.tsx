import type { Meta, StoryObj } from '@storybook/react'

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

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
