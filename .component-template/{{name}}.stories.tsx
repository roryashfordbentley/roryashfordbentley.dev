import type { Meta, StoryObj } from '@storybook/nextjs'

import { {{ name }} } from './{{ name }}'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/{{ name }}',
  component: {{ name }},
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof {{ name }}>

export default meta;

export const Default: Story = {
  args: {
    example: 'This is example text',
  },
}
