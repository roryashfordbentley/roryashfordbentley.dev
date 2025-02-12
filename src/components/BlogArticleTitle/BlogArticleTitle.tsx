import { Media } from '@/payload-types'
import Image from 'next/image'

export const BlogArticleTitle = (props: {
  title: string
  description: string
  featuredImage: Number | Media
}) => {
  const image = props.featuredImage as Media

  return (
    <section className="blog-article-title">
      {props.title && <h1 className="blog-article-title__title">{props.title}</h1>}

      {props.description && (
        <span className="blog-article-title__description">{props.description}</span>
      )}

      {image && (
        <Image
          src={image.url as string}
          alt={image.alt || 'Featured Image'}
          width={1330}
          height={750}
        />
      )}
    </section>
  )
}
