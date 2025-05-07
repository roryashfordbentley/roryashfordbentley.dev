import { Container, ContainerItem } from '@components/Container/Container'
import styles from './Header.module.css'
import { ReactNode } from 'react'

export const Header = (props: {
  logo: ReactNode
  navMenu: ReactNode
  themeToggle: ReactNode
  socialMenu: ReactNode
  light?: boolean
}) => {
  return (
    <header className={`${styles.wrapper} ${props.light ? styles.wrapperLight : ''}`}>
      <div className={styles.inner}>
        {props.logo && <div className={styles.logo}>{props.logo}</div>}
        {props.navMenu && <div className={styles.nav}>{props.navMenu}</div>}
        {props.socialMenu && <div className={styles.social}>{props.socialMenu}</div>}
        {props.themeToggle && <div className={styles.themeToggle}>{props.themeToggle}</div>}
      </div>
    </header>
  )
}
