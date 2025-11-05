// utils/extractHeadings.ts
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { createSlugCounter } from '@scripts/slugify'

export type HeadingNode = {
  id: string
  text: string
  level: number
  children: HeadingNode[]
}

export function extractHeadings(
  data: SerializedEditorState,
  allowedLevels: number[] = [2, 3],
): HeadingNode[] {
  const headings: HeadingNode[] = []
  const slugger = createSlugCounter()

  function walk(node: any) {
    if (!node) return
    if (Array.isArray(node)) {
      node.forEach(walk)
      return
    }

    if (node.type === 'heading') {
      const text = node.children?.map((c: any) => c.text || '').join('') || 'Untitled'
      const level = parseInt(String(node.tag || 'h2').replace('h', ''), 10) || 2

      // Only include levels in allowedLevels
      if (allowedLevels.includes(level)) {
        const id = slugger.next(text)
        headings.push({ id, text, level, children: [] })
      }
    }

    if (node.children) walk(node.children)
  }

  walk(data?.root?.children)
  return headings
}
