import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

export const Default: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 2,
    maxNumLinks: 5,
  },
}

export const LargePageNumber: Story = {
  args: {
    totalItems: 1000,
    itemsPerPage: 10,
    currentPage: 20,
    maxNumLinks: 5,
  },
}
