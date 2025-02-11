import Image from 'next/image'
import dateFormatter from '@scripts/date-formatter'
import styles from './CardArticle.module.css'

export const CardArticle = ({ title, description, date, url, imageSrc, imageAlt }) => {
  return (
    <div className={styles['card-article']}>
      <figure className={styles['card-article__figure']}>
        {imageSrc && <Image src={imageSrc} alt={imageAlt} fill />}
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
        <a className={styles['card-article__link']} href={url}>
          {title}
        </a>
      </h2>

      {description && <p className={styles['card-article__description']}>{description}</p>}
    </div>
  )
}
