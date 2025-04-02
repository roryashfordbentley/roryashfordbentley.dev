import styles from './ButtonLink.module.css'

export const ButtonLink = (props: {
  url: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  label: string
  type?: 'outline' | 'secondary' | 'tertiary'
}) => {
  return (
    <a
      className={`${styles.button} ${props.type == 'outline' ? styles.buttonOutline : ''}
      ${props.type == 'secondary' ? styles.buttonSecondary : ''}
      ${props.type == 'tertiary' ? styles.buttonTertiary : ''}
      `}
      href={props.url}
      target={props.target ?? '_self'}
    >
      {props.label}
    </a>
  )
}
