import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './MobileNavLink.module.css'

export const MobileNavLink = (props: { href: string; title: string }) => {
  return (
    <a href={props.href} className={styles.link}>
      {props.title}
      <span className={styles.icon}>
        <InlineSVG svgPath="/icons/arrow-right.svg" />
      </span>
    </a>
  )
}
