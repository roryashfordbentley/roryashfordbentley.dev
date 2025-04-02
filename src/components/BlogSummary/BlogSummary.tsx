import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'
import useEmblaCarousel from 'embla-carousel-react'

import { Slider, Slide } from '@components/Slider/Slider'
import { CardArticle } from '../CardArticle/CardArticle'
import styles from './BlogSummary.module.css'

export async function BlogSummary() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 6,
    overrideAccess: false,
  })

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <header className={styles.header}>
          <h3 className={styles.title}>Blog</h3>
          <p className={styles.description}>
            The latest from my blog. Writing about development, climbing and video games.
          </p>
        </header>

        <div className={styles.slider}>
          <Slider>
            {posts.docs.map((post, index) => {
              const featuredImage = post.featuredImage as Media

              return (
                <Slide key={index}>
                  <CardArticle
                    imageSrc={featuredImage?.url ? featuredImage?.url : undefined}
                    imageAlt={featuredImage?.alt ? featuredImage?.alt : undefined}
                    title={post.title ?? ''}
                    description={post.description ?? ''}
                    date={post.createdAt ?? null}
                    url={`/blog/${encodeURIComponent(post.slug ?? '')}`}
                  />
                </Slide>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}
