import styles from './VideoEmbed.module.css'

export const VideoEmbed = (props: { videoURL: string }) => {
  return (
    <div className={styles.container}>
      <iframe className={styles.player} src={props.videoURL} allowFullScreen />
    </div>
  )
}
