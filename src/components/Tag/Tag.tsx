import styles from './Tag.module.css'

export const Tag = (props: { label: string }) => {
  return (
    <>
      <span className={styles.tag}>{props.label}</span>
    </>
  )
}
