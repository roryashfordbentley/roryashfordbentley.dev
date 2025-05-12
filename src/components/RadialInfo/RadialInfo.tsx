import styles from './RadialInfo.module.css'

const skillsOne = ['JS/TS', 'React', 'Next.js', 'Node']

const skillsTwo = ['Sass', 'Tailwind', 'PHP', 'Twig']

const skillsThree = ['Docker', 'A11y', 'DBs', 'DevOps']

export const RadialInfo = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={`${styles.skillList}`}>
        {skillsOne.map((skill, index) => (
          <li
            key={index}
            className={styles.dot}
            style={{ '--index': index, '--items': skillsOne.length } as React.CSSProperties}
          >
            <div className={styles.dotContent}>{skill}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
