import styles from './ButtonLink.module.css'

export const ButtonLink = (props: {
  url: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  label: string
  type?: 'outline'
}) => {
  return (
    <a
      className={`${styles.button} ${props.type == 'outline' ? styles['button--outline'] : ''}`}
      href={props.url}
      target={props.target ?? '_self'}
    >
      {props.label}
    </a>
  )
}
