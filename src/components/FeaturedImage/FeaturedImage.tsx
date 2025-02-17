import styles from './FeaturedImage.module.css' // External CSS for the styles

export const FeaturedImage = (props: { image: React.ReactNode }) => {
  return <figure className={styles.figure}>{props.image}</figure>
}
