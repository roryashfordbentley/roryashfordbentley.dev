import styles from './BlogMeta.module.css'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import dateFormatter from '@scripts/dateFormatter'

export const BlogMeta = (props: { datePosted: string; readingTime?: string }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.metaItem}>
        <div className={styles.metaIcon}>
          <InlineSVG svgPath="icons/calendar.svg" />
        </div>

        <span className={styles.metaItemValue}>
          {dateFormatter(props.datePosted).readableDateString ?? ''}
        </span>
      </div>

      <div className={styles.metaItem}>
        <div className={styles.metaIcon}>
          <InlineSVG svgPath="icons/book.svg" />
        </div>

        <span className={styles.metaItemValue}>{props.readingTime ?? ''}</span>
      </div>
    </section>
  )
}
