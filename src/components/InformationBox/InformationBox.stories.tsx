import type { Meta, StoryObj } from '@storybook/nextjs'

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

export default meta

export const Default: Story = {
  args: {
    content:
      'What we are going to build is a method of scaffolding components quickly by  creating templates for Simple Scaffold, that allow us to create new,  named components that have all of their relationships and class names  generated for us.',
  },
}
