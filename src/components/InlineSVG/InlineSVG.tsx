'use client'

import { useEffect, useState } from 'react'
import styles from './InlineSVG.module.css'
import { svgGetContents } from '@scripts/svgGetContents'

export const InlineSVG: React.FC<{ svgPath: string }> = ({ svgPath }) => {
  const [sanitisedSVG, setSanitisedSVG] = useState<string>('')

  useEffect(() => {
    async function fetchSVG() {
      try {
        const svgContent = await svgGetContents(svgPath)
        setSanitisedSVG(svgContent || '')
      } catch (error) {
        console.error('Error fetching SVG:', error)
        setSanitisedSVG('<span>Error loading SVG</span>')
      }
    }

    fetchSVG()
  }, [svgPath])

  return <figure className={styles.inlineSvg} dangerouslySetInnerHTML={{ __html: sanitisedSVG }} />
}
