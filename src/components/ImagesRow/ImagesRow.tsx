import { ReactNode } from 'react'
import styles from './ImagesRow.module.css'

/**
 * This component takes _n_ components and outputs them in a row.
 * On smaller screens these get split into columns.
 *
 * It is recommended to use a maximum of 5 images.
 */

export const ImagesRow = (props: {
  images: Array<ReactNode>
  layout: 'row' | 'grid-focus-left' | 'grid-focus-right'
}) => {
  return (
    <div className={styles.imageGroup}>
      {props.images.map((image) => (
        <figure className={styles.figure}>{image}</figure>
      ))}
    </div>
  )
}
