import { Media } from '@/payload-types'

import { Slider, Slide } from '@components/Slider/Slider'
import { CardArticle } from '@components/CardArticle/CardArticle'
import { PageWrapper } from '@components/PageWrapper/PageWrapper'
import styles from './BlogSummary.module.css'

export async function BlogSummary(props: { posts: Array<any> }) {
  return (
    <section className={styles.wrapper}>
      <PageWrapper>
        <header className={styles.header}>
          <h3 className={styles.title}>Blog.</h3>
          <p className={styles.description}>
            The latest from my blog. Writing about development, climbing and video games.
          </p>
        </header>
      </PageWrapper>
      <div className={styles.slider}>
        <Slider>
          {props.posts.map((post, index) => {
            const featuredImage = (post?.featuredImageWithMetadata?.featuredImage as Media) || ''

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
    </section>
  )
}
