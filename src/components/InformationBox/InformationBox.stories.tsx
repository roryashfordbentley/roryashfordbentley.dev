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
    title: 'Passionate about',
    subtitle: 'creating meaningful change with a positive social impact',
    content:
      "I strive to work with organisations that in some way are trying to improve lives and better the world. This has led me to work with some incredible organisation and work on projects that I am completely invested in the mission and goals of the project.I'm currently looking for my next challenge",
  },
}
