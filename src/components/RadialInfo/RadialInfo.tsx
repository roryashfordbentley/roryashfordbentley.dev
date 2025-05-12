import styles from './RadialInfo.module.css'

const items = [
  ['JS/TS', 'React', 'Next.js', 'Node'],
  ['Sass', 'Tailwind', 'PHP', 'Twig'],
  ['Docker', 'A11y', 'DBs', 'DevOps'],
]

export const RadialInfo = () => {
  return (
    <div className={styles.wrapper}>
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
              <div className={styles.nodeContent}>{item}</div>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
