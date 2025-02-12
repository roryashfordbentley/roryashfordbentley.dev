import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import styles from './MainNav.module.css'

function isActiveNav(link: string) {
  return false
}

export const MainNav = (props: { navItems: any }) => {
  const navItems = props.navItems

  return (
    <nav className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        {navItems.map((item: { id: Key; page: { slug: string | undefined; title: string } }) => (
          <li key={item.id} className={styles['main-nav__list-item']}>
            <a className={styles['main-nav__link']} href={item.page.slug}>
              {item.page.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
