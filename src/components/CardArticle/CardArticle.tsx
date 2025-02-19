import Image from 'next/image'
import Link from 'next/link'
import dateFormatter from '@scripts/dateFormatter'
import styles from './CardArticle.module.css'

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
        {imageSrc && <Image src={imageSrc} alt={imageAlt ?? ''} fill />}
      </figure>
      <div className={styles.content}>
        {date && (
          <time className={styles.date} dateTime={dateFormatter(date).machineReadableDateString}>
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
