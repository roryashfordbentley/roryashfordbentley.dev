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
  type?: 'featured' | 'minimal'
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
    <Link
      className={`
        ${styles.container}
        ${type === 'minimal' ? styles.containerMinimal : ''}
      `}
      href={url}
      style={type === 'minimal' && imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
    >
      {type !== 'minimal' && (
        <figure className={styles.figure}>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          )}
        </figure>
      )}

      <div className={styles.content}>
        {date && (
          <time className={styles.date} dateTime={dateFormatter(date).machineReadableDateString}>
            <span className={styles.dateIcon}>
              <InlineSVG svgPath="icons/calendar.svg" />
            </span>
            {dateFormatter(date).readableDateString}
          </time>
        )}

        <h2 className={styles.title}>{title}</h2>

        {type !== 'minimal' && description && <p className={styles.description}>{description}</p>}
      </div>
    </Link>
  )
}
