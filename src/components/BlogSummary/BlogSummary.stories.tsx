import type { Meta, StoryObj } from '@storybook/react'

import { BlogSummary } from './BlogSummary'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlogSummary',
  component: BlogSummary,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogSummary>

export default meta

export const Default: Story = {
  args: {
    posts: [
      {
        createdAt: '2025-03-06T10:28:13.749Z',
        updatedAt: '2025-03-27T11:43:33.927Z',
        slug: 'scaffolding-components-the-easy-way-simple-scaffold',
        title: 'Scaffolding components, the easy way Simple-Scaffold',
        featuredImage: {
          alt: 'An example image alt tag',
          width: 800,
          height: 450,
          createdAt: '2025-03-06T10:45:42.036Z',
          updatedAt: '2025-03-06T10:45:42.036Z',
          url: './story-images/climber-800-450.jpg',
        },
      },
      {
        createdAt: '2025-03-06T10:26:54.609Z',
        updatedAt: '2025-03-27T11:44:30.055Z',
        slug: 'automate-build-tests-before-pushing-to-github-with-vitest-and-husky',
        title: 'Automate build tests before pushing to GitHub with Vitest and Husky',
        featuredImage: {
          alt: 'An example image alt tag',
          width: 800,
          height: 450,
          createdAt: '2025-03-06T10:45:42.036Z',
          updatedAt: '2025-03-06T10:45:42.036Z',
          url: './story-images/illustration-800-450.jpg',
        },
      },
      {
        createdAt: '2025-03-06T10:26:01.540Z',
        updatedAt: '2025-03-27T11:45:29.561Z',
        slug: 'godot---thoughts-from-a-first-time-game-developer',
        title: 'Godot - thoughts from a first time game developer',
        featuredImage: {
          alt: 'An example image alt tag',
          width: 800,
          height: 450,
          createdAt: '2025-03-06T10:45:42.036Z',
          updatedAt: '2025-03-06T10:45:42.036Z',
          url: './story-images/mac-800-450.jpg',
        },
      },
      {
        createdAt: '2025-03-06T10:24:23.499Z',
        updatedAt: '2025-03-27T11:47:41.906Z',
        slug: 'payload-cms---the-nextjs-wordpress-alternative',
        title: 'Payload CMS - the NextJS WordPress alternative',
        featuredImage: {
          alt: 'An example image alt tag',
          width: 800,
          height: 450,
          createdAt: '2025-03-06T10:45:42.036Z',
          updatedAt: '2025-03-06T10:45:42.036Z',
          url: './story-images/climber-800-450.jpg',
        },
      },
    ],
  },
}
