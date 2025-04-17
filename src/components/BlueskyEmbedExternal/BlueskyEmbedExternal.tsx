import { GlobeAltIcon } from '@heroicons/react/24/outline'

import styles from './BlueskyEmbedExternal.module.css'

export const BlueskyEmbedExternal = (props: {
  link: string
  title: string
  thumb: string
  thumbAlt: string
  description: string
  variant?: 'secondary' | 'tertiary'
}) => {
  return (
    <a
      className={`
        ${styles.embedExternal}
        ${props.variant == 'secondary' ? styles.embedexternalSecondary : ''}
        ${props.variant == 'tertiary' ? styles.embedexternalTertiary : ''}
      `}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={props.thumb} alt={props.thumbAlt} />
      <span className={styles.embedTitle}>{props.title}</span>

      {props.description && (
        <p className={styles.embedContent}>
          {props.description.length > 100
            ? `${props.description.slice(0, 144)}…`
            : props.description}
        </p>
      )}

      <span className={styles.embedLink}>
        <GlobeAltIcon className={styles.embedLinkIcon} />
        {(() => {
          try {
            return new URL(props.link).hostname.replace(/^www\./, '')
          } catch {
            return props.link
          }
        })()}
      </span>
    </a>
  )
}
