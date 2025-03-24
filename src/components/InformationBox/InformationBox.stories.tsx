import type { Meta, StoryObj } from '@storybook/react'

import { InformationBox } from './InformationBox'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/InformationBox',
  component: InformationBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InformationBox>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
