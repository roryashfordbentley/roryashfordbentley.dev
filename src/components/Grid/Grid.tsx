import React, { ReactElement } from 'react'
import styles from './Grid.module.css'

export const Grid = (props: {
  children: ReactElement<typeof GridItem> | ReactElement<typeof GridItem>[]
  columns?: number
  columnsMedium?: number
  columnsLarge?: number
  gutter?: boolean
}) => {
  const style = {
    ...(props.columns && { '--columns': props.columns }),
    ...(props.columnsMedium && { '--columns-m': props.columnsMedium }),
    ...(props.columnsLarge && { '--columns-l': props.columnsLarge }),
  }

  return (
    <div
      className={`${styles.grid} ${props.gutter ? styles['grid--gutter'] : ''}`}
      style={style as React.CSSProperties}
    >
      {Array.isArray(props.children) ? props.children : [props.children]}
    </div>
  )
}

export const GridItem = (props: {
  children: React.ReactNode
  columnSpan?: number
  columnSpanMedium?: number
  columnSpanLarge?: number
}) => {
  const style = {
    ...(props.columnSpan && { '--col-span': props.columnSpan }),
    ...(props.columnSpanMedium && { '--col-span-m': props.columnSpanMedium }),
    ...(props.columnSpanLarge && { '--col-span-l': props.columnSpanLarge }),
  }

  return (
    <div className={styles.gridItem} style={style as React.CSSProperties}>
      {props.children}
    </div>
  )
}
