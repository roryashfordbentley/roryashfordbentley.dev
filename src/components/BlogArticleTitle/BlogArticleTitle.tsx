import { Media } from '@/payload-types'
import Image from 'next/image'

import { svgGetContents } from '@scripts/svgGetContents'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'

import styles from './BlogArticleTitle.module.css' // External CSS for the styles
import { Container, ContainerItem } from '@components/Container/Container'

export const BlogArticleTitle = (props: {
  title: string
  description: string
  datePostedLabel?: string
  datePosted: string
  readingTimeLabel?: string
  readingTime?: string
}) => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.inner}>
        <Container>
          <ContainerItem>
            <div className={styles.content}>
              {props.title && <h1 className={styles.title}>{props.title}</h1>}
              {props.description && <p className={styles.description}>{props.description}</p>}
            </div>

            <aside className={styles.meta}>
              <div className={styles.metaItem}>
                <div className={styles.metaIcon}>
                  <InlineSVG svgPath="/icons/calendar.svg" />
                </div>

                <span className={styles.metaItemValue}>{props.datePosted ?? ''}</span>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.metaIcon}>
                  <InlineSVG svgPath="/icons/book.svg" />
                </div>

                <span className={styles.metaItemTitle}>
                  {props.readingTimeLabel ?? 'Reading time'}:
                </span>
                <span className={styles.metaItemValue}>{props.readingTime ?? ''}</span>
              </div>
            </aside>
          </ContainerItem>
        </Container>
      </header>

      <Container>
        <ContainerItem>
          <figure className={styles.coverImage}>
            <Image
              src="/story-images/mac-1500-844.jpg"
              alt="cover image of a Macbook"
              width={1330}
              height={720}
            />
          </figure>
        </ContainerItem>
      </Container>
    </section>
  )
}
