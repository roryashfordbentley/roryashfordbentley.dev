import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './SocialNav.module.css'
import { directUploadThingURL } from '@scripts/directUploadThingURL'

export const SocialNav = (props: { items: Array<any>; wide?: Boolean }) => {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.list} ${props.wide && styles.listWide}`}>
        {props.items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <a className={styles.link} href={item.link} title={item.label}>
              {item.icon && typeof item.icon !== 'string' && item.icon.url && item.icon._key && (
                <InlineSVG
                  svgPath={item.icon.url ? directUploadThingURL(item.icon.url, item.icon._key) : ''}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
