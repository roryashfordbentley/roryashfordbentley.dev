import { ReactElement } from 'react'
import styles from './Container.module.css'

interface ItemProps {
  children?: React.ReactNode
  layout?: 'full' | 'wide' | 'debug' | 'sidebar-before' | 'sidebar-after'
}

export const ContainerItem = ({ children, layout }: ItemProps) => {
  let itemClassName = styles.item

  if (layout == 'full') {
    itemClassName = `${styles.item} ${styles['item--full']}`
  } else if (layout == 'wide') {
    itemClassName = `${styles.item} ${styles['item--wide']}`
  } else if (layout == 'sidebar-before') {
    itemClassName = `${styles.item} ${styles['item--sidebar-before']}`
  } else if (layout == 'sidebar-after') {
    itemClassName = `${styles.item} ${styles['item--sidebar-after']}`
  }

  return <div className={itemClassName}>{children}</div>
}

interface ContainerProps {
  children?: React.ReactNode
  debug?: boolean
}

export const Container = ({ children, debug }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>{children}</div>
      {/**
       * We add an additional grid that sits behind the actual Grid for visual debugging when required.
       */}
      {debug && (
        <div className={`${styles.grid} ${styles['grid--debug']}`}>
          {Array(7)
            .fill(null)
            .map((_, index) => (
              <div key={index} className={`${styles.item} ${styles['item--debug']}`}></div>
            ))}
        </div>
      )}
    </div>
  )
}
