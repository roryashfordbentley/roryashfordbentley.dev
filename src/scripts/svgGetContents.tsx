import DOMPurify from 'isomorphic-dompurify'

/**
 * SVG Get Contents
 *
 * @param svgPath The path to the SVG file. This should be a relative path from the public directory.
 * @returns
 */
export async function svgGetContents(svgPath: string): Promise<string | null> {
  try {
    const res = await fetch(`/${svgPath}`)

    if (!res.ok) {
      console.error(`Failed to fetch SVG: ${res.statusText}`)
      return null
    }

    const svg = await res.text()

    const sanitized = DOMPurify.sanitize(svg)

    return sanitized
  } catch (err) {
    console.error('Error loading SVG:', err)
    return null
  }
}
