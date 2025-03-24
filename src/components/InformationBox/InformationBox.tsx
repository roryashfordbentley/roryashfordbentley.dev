import styles from './InformationBox.module.css'

export const InformationBox = (props: {
  example: string
}) => {
  return (
    <>
     <p>{props.example}</p>
    </>
  )
}
