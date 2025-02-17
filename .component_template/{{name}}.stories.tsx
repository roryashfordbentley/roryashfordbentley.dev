import type { Meta, StoryObj } from '@storybook/react'

import { {{ name }} } from './{{ name }}'
import Image from 'next/image'

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

export const Core: Story = {
  args: {
    example: 'This is example text',
  },
}
