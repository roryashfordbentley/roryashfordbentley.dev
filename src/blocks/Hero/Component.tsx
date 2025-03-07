import React from 'react'
import { Hero } from '@components/Hero/Hero'
import { ButtonLink } from '@components/ButtonLink/ButtonLink'

export type HeroBlockProps = {
  heroBlockTitle: string
  heroBlockSubtitle: string
  heroBlockDescription: string
  heroBlockButtonText: string
  heroBlockButtonLink: string
  blockType: 'hero'
}

export const HeroBlock: React.FC<HeroBlockProps> = ({
  heroBlockTitle,
  heroBlockSubtitle,
  heroBlockDescription,
  heroBlockButtonText,
  heroBlockButtonLink,
}) => {
  return (
    <div className="hero-block">
      <Hero
        title={heroBlockTitle}
        subtitle={heroBlockSubtitle}
        description={heroBlockDescription}
        button={<ButtonLink url={heroBlockButtonLink} label={heroBlockButtonText} />}
      />
    </div>
  )
}
