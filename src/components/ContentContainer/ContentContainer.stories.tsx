import type { Meta, StoryObj } from '@storybook/nextjs'

import { ContentContainer } from './ContentContainer'
import { PageTitle } from '@components/PageTitle/PageTitle'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/ContentContainer',
  component: ContentContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentContainer>

export default meta

export const Default: Story = {
  args: {
    children: [
      <PageTitle
        title="👋🏻 Hello, I'm Rory."
        description="I'm a web and software engineer.
I love code, climbing and cooking."
      />,
    ],
  },
}
