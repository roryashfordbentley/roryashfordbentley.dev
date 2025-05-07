import styles from './MobileNav.module.css'

export const MobileNav = (props: { toggle: boolean; children: React.ReactNode }) => {
  return (
    <nav className={styles.wrapper + (props.toggle ? ` ${styles.wrapperOpen}` : '')}>
      {props.children}
    </nav>
  )
}
