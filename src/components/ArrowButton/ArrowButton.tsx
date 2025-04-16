'use client' // Is a client component because it uses onClick

import styles from './ArrowButton.module.css'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'

export const ArrowButton = (props: {
  title: string
  type?: 'prev' | 'next'
  disabled?: boolean
  onClick?: () => void
}) => {
  const disabled = props.disabled ?? false
  const svgPath = props.type === 'prev' ? 'icons/arrow-left.svg' : 'icons/arrow-right.svg'

  return (
    <button
      className={`${styles.button} ${props.type == 'prev' ? styles.buttonPrev : ''} ${
        props.type == 'next' ? styles.buttonNext : ''
      } ${disabled ? styles.buttonDisabled : ''}`}
      title={props.title}
      aria-label={props.title}
      onClick={props.onClick}
    >
      <InlineSVG svgPath={svgPath} />
    </button>
  )
}
