import styles from './PageTitle.module.css'

export const PageTitle = (props: { title: string }) => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{props.title}</h1>
    </section>
  )
}
