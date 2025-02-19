import styles from './FeaturedImage.module.css'

export const FeaturedImage = (props: { image: React.ReactNode }) => {
  return <figure className={styles.figure}>{props.image}</figure>
}
