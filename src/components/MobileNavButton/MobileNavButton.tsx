import styles from './MobileNavButton.module.css'

export const MobileNavButton = (props: { example: string }) => {
  return (
    <>
      <button
        className={styles.button}
        aria-label="Open navigation Menu"
        title="Open navigation menu"
      >
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5127 7H20.4884" stroke="#222B2E" stroke-width="2" stroke-linecap="round" />
          <path
            d="M1.5127 12.7822H14.706"
            stroke="#222B2E"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M1.5127 1.21802H20.4884"
            stroke="#222B2E"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </>
  )
}
