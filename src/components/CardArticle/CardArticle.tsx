import Image from 'next/image'
import Link from 'next/link'
import dateFormatter from '@scripts/dateFormatter'
import styles from './CardArticle.module.css'

interface CardArticleProps {
  title: string
  description?: string
  date?: Date | String | null
  url: string
  imageSrc?: string
  imageAlt?: string
}

export const CardArticle = ({
  title,
  description,
  date,
  url,
  imageSrc,
  imageAlt,
}: CardArticleProps) => {
  return (
    <div className={styles['card-article']}>
      <figure className={styles['card-article__figure']}>
        {imageSrc && <Image src={imageSrc} alt={imageAlt ?? ''} fill />}
      </figure>

      {date && (
        <time
          className={styles['card-article__date']}
          dateTime={dateFormatter(date).machineReadableDateString}
        >
          {dateFormatter(date).readableDateString}
        </time>
      )}

      <h2 className={styles['card-article__title']}>
        <Link className={styles['card-article__link']} href={url}>
          {title}
        </Link>
      </h2>

      {description && <p className={styles['card-article__description']}>{description}</p>}
    </div>
  )
}
