import styles from './ButtonLink.module.css'

export const ButtonLink = (props: {
  url: String
  target: '_self' | '_blank' | '_parent' | '_top'
  label: 'string'
}) => {
  return (
    <a className={styles.button} href={props.url} target={props.target ?? '_self'}>
      {props.label}
    </a>
  )
}
