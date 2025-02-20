import styles from './WireframeBox.module.css'

export const WireframeBox = (props: { title?: string; content?: string }) => {
  return (
    <div className={styles.WireframeBox}>
      <div className={styles.inner}>
        <strong>{props.title}</strong>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
