import type { Meta, StoryObj } from '@storybook/nextjs'

import { ErrorScreen } from './ErrorScreen'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/ErrorScreen',
  component: ErrorScreen,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorScreen>

export default meta

export const Default: Story = {
  args: {
    errorMessage: '404 page not found',
  },
}
