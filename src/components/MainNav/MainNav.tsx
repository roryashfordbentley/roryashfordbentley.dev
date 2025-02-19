import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import styles from './MainNav.module.css'

function isActiveNav(link: string) {
  return false
}

export const MainNav = (props: { navItems: any }) => {
  const navItems = props.navItems

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((item: { id: Key; page: { slug: string | undefined; title: string } }) => (
          <li key={item.id} className={styles.listItem}>
            <a className={styles.link} href={item.page.slug}>
              {item.page.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
