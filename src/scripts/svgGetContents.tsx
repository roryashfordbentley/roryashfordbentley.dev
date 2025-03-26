'use client' // Required for client-side rendering in Next.js

import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

/**
 * SVG Get Contents
 *
 * Takes an SVG URI and imports it as SVG data so it can be styled.
 * As this requires using dangerouslySetInnerHTML to load the SVG data
 * we also import DOMPurify to sanitise the data before presenting it to
 * mitigate XSS vulnerabilities from untrusted sources.
 */
export function svgGetContents(svgPath: string) {
  const [svgContent, setSvgContent] = useState<string | ''>('')

  useEffect(() => {
    const loadSVG = async () => {
      const content = await fetchSVG(svgPath)
      if (content) {
        setSvgContent(content)
      }
    }

    loadSVG()
  }, [])

  return svgSanitizer(svgContent)
}

/**
 * Fetch Data
 *
 * This function fetches the data from the specified URL and returns it as a string.
 */
const fetchSVG = async (path: string): Promise<string | null> => {
  try {
    const response = await fetch(path)

    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`)
    }

    const svgContent = await response.text()

    return svgContent
  } catch (error) {
    console.error(error)

    return null
  }
}

/**
 * SVG Sanitizer
 *
 * This function returns a sanitized SVG content string
 */
const svgSanitizer = (svgContent: string) => {
  const sanitizedSvgContent = DOMPurify.sanitize(svgContent)

  return (
    /*<figure className="svg-container" dangerouslySetInnerHTML={{ __html: sanitizedSvgContent }} />*/
    sanitizedSvgContent
  )
}
