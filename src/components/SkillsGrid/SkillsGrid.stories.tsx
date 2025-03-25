import type { Meta, StoryObj } from '@storybook/react'

import { SkillsGrid, SkillsGridItem } from './SkillsGrid'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/SkillsGrid',
  component: SkillsGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkillsGrid>

export default meta

export const Default: Story = {
  args: {
    title: 'Skills',
    description: 'Languages, frameworks and libraries I love working with',
    children: Array(12).fill(
      <SkillsGridItem
        icon="/rab-logo-box-inverted.svg"
        title="Javascript/Typescript"
        description="Skilled in building scalable applications with JavaScript and TypeScript, ensuring robust and maintainable code."
      />,
    ),
  },
}
