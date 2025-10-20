import styles from './LogoLink.module.css'

export const LogoLink = (props: { link: string }) => {
  return (
    <a className={styles.link} href={props.link} title="Rory Ashford-Bentley homepage">
      <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42.3732 0.5L42.4863 26.6911L32.7989 26.7428L32.8412 10.0231L0.929688 10.1784V0.5H42.3732Z"
          fill="black"
          className={styles.foreground}
        />
        <path
          d="M42.5282 31.7735L0.922852 10.1719V20.8983L42.5282 42.5V31.7735Z"
          fill="black"
          className={styles.foreground}
        />
        <rect
          x="0.916992"
          y="25.757"
          width="9.5231"
          height="9.5231"
          fill="black"
          className={styles.foreground}
        />
      </svg>
    </a>
  )
}
