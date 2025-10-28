import { Media } from '@/payload-types'

import { Slider, Slide } from '@components/Slider/Slider'
import { CardArticle } from '@components/CardArticle/CardArticle'
import { Wrapper } from '@components/Wrapper/Wrapper'
import styles from './BlogSummary.module.css'
import { SectionTitle } from '@components/SectionTitle/SectionTitle'

export async function BlogSummary(props: { posts: Array<any> }) {
  return (
    <section className={styles.wrapper}>
      <Wrapper>
        <SectionTitle
          title="Blog."
          description="The latest from my blog. Writing about development, climbing and video games."
        />
      </Wrapper>
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
                  type="minimal"
                />
              </Slide>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
