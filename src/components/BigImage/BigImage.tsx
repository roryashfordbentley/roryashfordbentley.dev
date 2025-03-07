import styles from './BigImage.module.css'

/**
 * This component renders a single image, edge-to-edge of the content-area.
 */

export const BigImage = (props: {
  image: React.ReactNode
  caption?: string
  credit?: string
  creditLink?: string
}) => {
  return (
    <figure className={styles.figure}>
      {props.image}

      {(props.caption || props.credit) && (
        <figcaption className={styles.caption}>
          <div className={styles.captionWrapper}>
            {props.caption && <span className={styles.captionText}>{props.caption}</span>}
          </div>
          <div className={styles.creditWrapper}>
            {props.credit &&
              (props.creditLink ? (
                <a className={styles.creditLink} href={props.creditLink}>
                  {props.credit}
                </a>
              ) : (
                <span className={styles.credit}>{props.credit}</span>
              ))}
          </div>
        </figcaption>
      )}
    </figure>
  )
}
