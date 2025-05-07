import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './SocialNav.module.css'

export const SocialNav = (props: { items: Array<any> }) => {
  console.log(props.items)
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {props.items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <a className={styles.link} href={item.link}>
              {item.icon && typeof item.icon !== 'string' && item.icon.url && (
                /* HACK: this find/replace allows use to load images directly from
                the public folder and not via API which requires media to be on a remote store.
                As these are icons it should be OK but could do with a refactor probably. */

                <InlineSVG svgPath={item.icon.url?.replace('/api/icons/file/', './icons/') || ''} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
