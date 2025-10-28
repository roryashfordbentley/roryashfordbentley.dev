import { useEffect } from 'react'

import styles from './MobileNav.module.css'
import { MobileNavLink } from '@components/MobileNavLink/MobileNavLink'

export const MobileNav = (props: {
  toggle: boolean
  items: Array<any>
  socialItems: React.ReactNode
}) => {
  // Disable body scroll when menu is open
  useEffect(() => {
    if (props.toggle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Cleanup on unmount (or menu close)
    return () => {
      document.body.style.overflow = ''
    }
  }, [props.toggle])

  const navLinks = props.items.map((item) => {
    if (typeof item.page === 'object' && 'slug' in item.page) {
      // Special case: Home page
      if (item.page.slug === 'home') {
        item.page.slug = '/'
      } else {
        // Ensure the slug is prepended with a forward slash if it's not already an absolute path
        item.page.slug = `/${(item.page.slug ?? '').replace(/^\/+/, '')}`
      }
    }

    return item
  })

  return (
    <nav className={styles.wrapper + (props.toggle ? ` ${styles.wrapperOpen}` : '')}>
      <ul className={styles.list}>
        {navLinks &&
          navLinks.map((item, id) => (
            <li className={styles.listItem} key={id}>
              <MobileNavLink title={item.page.title} href={item.page.slug} />
            </li>
          ))}
      </ul>

      {props.socialItems}
    </nav>
  )
}
