import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './RadialInfo.module.css'

const items = [
  ['JS', 'React', 'Next', 'Node'],
  ['Sass', 'Tailwind', 'PHP', 'Twig'],
  ['Docker', 'A11y', 'Database', 'DevOps'],
]

export const RadialBox = (props: { title: string; iconPath: string }) => {
  return (
    <div className={styles.radialBox}>
      <figure className={styles.radialBoxIcon}>
        <InlineSVG svgPath={props.iconPath} />
        {/*<figcaption className={styles.radialBoxTitle}>{props.title}</figcaption>*/}
      </figure>
    </div>
  )
}

export const RadialInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.animation}>
        {items.map((itemGroup, listIndex) => (
          <ul
            key={listIndex}
            className={`${styles.radialList} ${styles['radialList' + (listIndex + 1)]} `}
          >
            {itemGroup.map((item, index) => (
              <li
                key={index}
                className={styles.node}
                style={{ '--index': index, '--items': itemGroup.length } as React.CSSProperties}
              >
                <RadialBox
                  title={item}
                  iconPath={`./icons/${item.toLowerCase().replace(/\s+/g, '-')}.svg`}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
