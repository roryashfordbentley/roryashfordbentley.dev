import styles from './{{ name }}.module.css'

export const {{ name }} = (props: {
  example: string
}) => {
  return (
    <>
     <p>{props.example}</p>
    </>
  )
}
