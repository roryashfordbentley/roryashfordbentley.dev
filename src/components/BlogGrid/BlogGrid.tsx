import React, { ReactElement, ReactNode } from 'react'
import styles from './BlogGrid.module.css' // External CSS for the styles

export const BlogGrid = ({ children }: { children: ReactElement<typeof BlogGridItem>[] }) => {
  return <div className={styles['blog-grid']}>{children}</div>
}

export const BlogGridItem = ({ children }: { children: ReactNode }) => {
  return <div className={styles['blog-grid__item']}>{children}</div>
}
