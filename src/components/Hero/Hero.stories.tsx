import type { Meta, StoryObj } from '@storybook/nextjs'

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
    title: "👋🏻 Hello, I'm Rory.",
    description: "I'm a web and software engineer. I love code, climbing and cooking.",
    content:
      '<p>This is the hero section of the page. You can use it to introduce yourself or your website.</p>',
    imageSrc: '/path/to/your/image.jpg',
    imageAlt: 'Portrait of Rory',
  },
}
