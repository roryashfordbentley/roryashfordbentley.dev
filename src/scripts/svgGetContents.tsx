import DOMPurify from 'isomorphic-dompurify'

export async function svgGetContents(svgPath: string): Promise<string | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || ''}/${svgPath}`)

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
