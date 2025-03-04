import type { Meta, StoryObj } from '@storybook/react'

import { Hero } from './Hero'
import { ButtonLink } from '@components/ButtonLink/ButtonLink'

import { Default as ButtonLinkDefault } from '@components/ButtonLink/ButtonLink.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>

export default meta

export const Default: Story = {
  args: {
    title: 'Rory Ashford-Bentley.',
    subtitle: 'Full-Stack Engineer.',
    description:
      'Passionate about creating digital solutions that make meaningful change and have a positive social impact.',
    button: <ButtonLink {...ButtonLinkDefault.args} />,
  },
}
