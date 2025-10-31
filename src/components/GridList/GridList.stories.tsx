import type { Meta, StoryObj } from '@storybook/nextjs'

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
        iconPath="./icons/js.svg"
        title="Javascript/Typescript"
        description="Skilled in building scalable applications with JavaScript and TypeScript, ensuring robust and maintainable code."
      />,
    ),
  },
}
