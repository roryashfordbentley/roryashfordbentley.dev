import React from 'react'
import { Hero } from '@components/Hero/Hero'
import { Media } from '@/payload-types'

export type HeroBlockProps = {
  heroBlockTitle: string
  heroBlockSubtitle: string
  heroBlockDescription: string
  heroBlockImage: Media
  blockType: 'hero'
}

export const HeroBlock: React.FC<HeroBlockProps> = ({
  heroBlockTitle,
  heroBlockSubtitle,
  heroBlockDescription,
  heroBlockImage,
}) => {
  const imgSrc = heroBlockImage?.url || ''
  const imgAlt = heroBlockImage?.alt || ''

  return (
    <div className="hero-block">
      <Hero
        title={heroBlockTitle}
        description={heroBlockSubtitle}
        content={heroBlockDescription}
        imageSrc={imgSrc}
        imageAlt={imgAlt}
      />
    </div>
  )
}
