import { svgGetContents } from '@scripts/svgGetContents'

import styles from './InlineSVG.module.css'

export const InlineSVG = (props: { svgPath: string }) => {
  const sanitisedSVGPath = svgGetContents(props.svgPath)

  return (
    <figure className={styles.inlineSvg} dangerouslySetInnerHTML={{ __html: sanitisedSVGPath }} />
  )
}
