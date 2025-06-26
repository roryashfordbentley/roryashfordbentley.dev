import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import dateFormatter from '@scripts/dateFormatter'

import styles from './BlogArticleTitle.module.css' // External CSS for the styles
import { Container, ContainerItem } from '@components/Container/Container'

export const BlogArticleTitle = (props: {
  title: string
  description: string
  datePostedLabel?: string
  datePosted: string
  readingTimeLabel?: string
  readingTime?: string
  image?: React.ReactNode
}) => {
  return (
    <header className={styles.wrapper}>
      {props.title && <h1 className={styles.title}>{props.title}</h1>}

      <aside className={styles.sidebarBefore}>
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

          <span className={styles.metaItemTitle}>{props.readingTimeLabel ?? 'Reading time'}:</span>

          <span className={styles.metaItemValue}>{props.readingTime ?? ''}</span>
        </div>
      </aside>

      <aside className={styles.sidebarAfter}>Next/ Prev posts...</aside>

      {props.image && <div className={styles.coverImage}>{props.image}</div>}

      {props.description && <p className={styles.description}>{props.description}</p>}
    </header>
  )
}
