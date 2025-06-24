import type { Meta, StoryObj } from '@storybook/nextjs'

import { InlineSVG } from './InlineSVG'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Utility/InlineSVG',
  component: InlineSVG,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InlineSVG>

export default meta

export const Default: Story = {
  args: {
    svgPath: '/rab-logo-box.svg',
  },
}
