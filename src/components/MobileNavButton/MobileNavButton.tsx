import { InlineSVG } from '@components/InlineSVG/InlineSVG'
import styles from './MobileNavButton.module.css'

export const MobileNavButton = (props: { toggle: boolean; onClick: () => void }) => {
  const menuIconPath = '/icons/nav-icon.svg'
  const closeIconPath = '/icons/close-icon.svg'

  return (
    <>
      <button
        onClick={props.onClick}
        className={`${styles.button} ${props.toggle ? styles.buttonToggle : ''}`}
        aria-label="Open navigation Menu"
        title="Open navigation menu"
      >
        {!props.toggle ? (
          <InlineSVG svgPath={menuIconPath} />
        ) : (
          <InlineSVG svgPath={closeIconPath} />
        )}
      </button>
    </>
  )
}
