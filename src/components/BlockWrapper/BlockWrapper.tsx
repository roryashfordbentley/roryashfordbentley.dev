import styles from './BlockWrapper.module.css'
import { ReactNode } from 'react'

/**
 * Block Wrapper
 *
 * This component is a utility wrapper for blocks to provide layout options across all blocks.
 */

export const BlockWrapper = ({ children, layout }: { children: ReactNode; layout?: string }) => {
  let blockLayoutClass = ''

  if (layout === 'full') {
    blockLayoutClass = styles.blockWrapperFull
  } else if (layout === 'wide') {
    blockLayoutClass = styles.blockWrapperWide
  }

  return <div className={`${styles.blockWrapper} ${blockLayoutClass}`}>{children}</div>
}
