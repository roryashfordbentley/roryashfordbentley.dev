'use client'

import { Key } from 'react'
import { usePathname } from 'next/navigation'
import styles from './MainNav.module.css'

export const MainNav = (props: {
  navItems: { id: Key; page: { slug?: string; title: string } }[]
}) => {
  const navItems = props.navItems
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((item) => {
          const isActive = pathname === item.page.slug || pathname?.startsWith(item.page.slug + '/')

          return (
            <li key={item.id} className={styles.listItem}>
              <a
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                href={item.page.slug ?? '#'}
              >
                {item.page.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
