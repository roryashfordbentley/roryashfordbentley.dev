import { svgGetContents } from '@scripts/svgGetContents'

import styles from './InlineSVG.module.css'

export async function InlineSVG(props: { svgPath: string }) {
  const sanitisedSVG = await svgGetContents(props.svgPath)

  return <figure className={styles.inlineSvg} dangerouslySetInnerHTML={{ __html: sanitisedSVG }} />
}
