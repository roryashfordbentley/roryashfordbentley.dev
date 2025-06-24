import type { Meta, StoryObj } from '@storybook/react'

import { MobileNav } from './MobileNav'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/MobileNav',
  component: MobileNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNav>

export default meta

export const Default: Story = {
  args: {
    toggle: true,
    children: [
      <ul key="mobile-nav-list" className="mobile-nav-list">
        <li className="mobile-nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#about">About</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#services">Services</a>
        </li>
        <li className="mobile-nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>,
    ],
  },
}
