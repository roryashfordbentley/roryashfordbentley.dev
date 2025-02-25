import { Media } from '@/payload-types'
import Image from 'next/image'
import styles from './BlogArticleTitle.module.css' // External CSS for the styles

export const BlogArticleTitle = (props: {
  title: string
  description: string
  datePostedLabel?: string
  datePosted: string
  readingTimeLabel?: string
  readingTime?: string
}) => {
  return (
    <section className={styles.grid}>
      <div className={styles.content}>
        {props.title && <h1 className={styles.title}>{props.title}</h1>}
        {props.description && <p className={styles.description}>{props.description}</p>}
      </div>

      <aside className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.metaItemTitle}>{props.datePostedLabel ?? 'Date Posted'}</span>
          <span className={styles.metaItemValue}>{props.datePosted ?? ''}</span>
        </div>

        <div className={styles.metaItem}>
          <span className={styles.metaItemTitle}>{props.readingTimeLabel ?? 'Reading time'}</span>
          <span className={styles.metaItemValue}>{props.readingTime ?? ''}</span>
        </div>
      </aside>
    </section>
  )
}
