import React from 'react'
import { BigImage } from '@components/BigImage/BigImage'
import Image from 'next/image'
import { Media } from '@/payload-types'

export type BigImageBlockProps = {
  image: Media
  caption?: string
  credit?: string
  creditLink?: string
  blockType: 'bigImage'
}

export const BigImageBlock: React.FC<BigImageBlockProps> = ({
  image,
  caption,
  credit,
  creditLink,
}) => {
  const imgSrc = image.url || ''
  const imgAlt = image.alt || ''
  const imgWidth = 1330
  const imgHeight = 750

  const img = <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />

  //console.log(image)

  return (
    <div className="big-image-block">
      <BigImage image={img} caption={caption} credit={credit} creditLink={creditLink} />
    </div>
  )
}
