import styles from './Tag.module.css'

export const Tag = (props: { label: string; link: string }) => {
  return (
    <a className={styles.tag} href={props.link}>
      {props.label}
    </a>
  )
}
