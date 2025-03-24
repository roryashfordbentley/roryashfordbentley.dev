import styles from './Hero.module.css'

export const Hero = (props: {
  title: string
  subtitle: string
  description: string
  button: React.ReactNode
}) => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        {/*<h1 className={styles.title}>{props.title}</h1>*/}
        <h1 className={styles.title}>
          Rory <br />
          Ashford-Bentley
        </h1>
        {/*<p className={styles.subtitle}>{props.subtitle}</p>*/}
        <p className={styles.subtitle}>Senior Full-Stack Engineer</p>
      </header>
    </section>
  )
}
