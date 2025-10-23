import styles from './SectionTitle.module.css'

export const SectionTitle = (props: { title: string; description?: string }) => {
  return (
    <section className={styles.wrapper}>
      {props.title && <h1 className={styles.title}>{props.title}</h1>}
      {props.description && <p className={styles.description}>{props.description}</p>}
    </section>
  )
}
