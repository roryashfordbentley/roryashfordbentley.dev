import styles from './MainNav.module.css'

function isActiveNav(link: string) {
  return false
}

export const MainNav = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        <li className={styles['main-nav__list-item']}>
          <a className={styles['main-nav__link']} href="#">
            Home
          </a>
        </li>
      </ul>
    </nav>
  )
}
