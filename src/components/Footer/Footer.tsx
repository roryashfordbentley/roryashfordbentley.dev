import styles from './Footer.module.css'
const today = new Date()

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.copyright}>&copy; {today.getFullYear()}. All rights reserved.</div>

      <div className={styles.links}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>

      <div className={styles.bigText}>
        <p>Rory Ashford-Bentley</p>
      </div>
    </footer>
  )
}
