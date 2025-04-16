import Image from 'next/image'
import Link from 'next/link'
import dateFormatter from '@scripts/dateFormatter'
import styles from './CardArticle.module.css'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'

interface CardArticleProps {
  title: string
  description?: string
  date?: Date | string | null
  url: string
  imageSrc?: string
  imageAlt?: string
  type?: 'featured' | 'compact'
}

export const CardArticle = ({
  title,
  description,
  date,
  url,
  imageSrc,
  imageAlt,
  type,
}: CardArticleProps) => {
  return (
    <div
      className={`
        ${styles.container}
        ${type == 'featured' ? styles['container--featured'] : ''}
        ${type == 'compact' ? styles['container--compact'] : ''}
      `}
    >
      <figure className={styles.figure}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1500px) 50vw, 50vw"
          />
        )}
      </figure>

      <div className={styles.content}>
        {date && (
          <time className={styles.date} dateTime={dateFormatter(date).machineReadableDateString}>
            <span className={styles.dateIcon}>
              <InlineSVG svgPath="icons/calendar.svg" />
            </span>
            {dateFormatter(date).readableDateString}
          </time>
        )}

        <h2 className={styles.title}>
          <Link className={styles.link} href={url}>
            {title}
          </Link>
        </h2>

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}
