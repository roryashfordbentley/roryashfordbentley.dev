import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './Tag.module.css'
import Link from 'next/link'

export const Tag = (props: { label: string; link: string; active?: boolean }) => {
  const linkTitle = props.active
    ? `Reset ${props.label} filter`
    : `\Filter blog posts by tag - ${props.label} `

  return (
    <Link
      className={`${styles.tag} ${props.active ? styles.tagActive : ''}`}
      href={props.link}
      title={linkTitle}
    >
      {props.label}
      {props.active ? (
        <span className={styles.closeIcon}>
          <InlineSVG svgPath="icons/close-icon.svg" />
        </span>
      ) : (
        ''
      )}
    </Link>
  )
}
