import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'

import { GridList, GridListItem } from './GridList'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/GridList',
  component: GridList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GridList>

export default meta

export const Default: Story = {
  args: {
    title: 'Skills',
    description: 'Languages, frameworks and libraries I love working with',
    children: Array(12).fill(
      <GridListItem
        icon={<Image src="/rab-logo-box.svg" alt="Javascript/Typescript" width={40} height={40} />}
        title="Javascript/Typescript"
        description="Skilled in building scalable applications with JavaScript and TypeScript, ensuring robust and maintainable code."
      />,
    ),
  },
}
