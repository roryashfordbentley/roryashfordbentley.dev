import styles from './Wrapper.module.css'

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>
}
