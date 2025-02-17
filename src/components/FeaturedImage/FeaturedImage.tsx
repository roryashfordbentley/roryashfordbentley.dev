import styles from './FeaturedImage.module.css' // External CSS for the styles

export const FeaturedImage = (props: { image: HTMLImageElement }) => {
  return <figure class={styles.figure}>{props.image}</figure>
}
