// utils/slug.ts
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

export function createSlugCounter() {
  const counts: Record<string, number> = {}
  return {
    next(text: string) {
      let base = slugify(text)
      if (!base) base = 'section'
      if (counts[base]) {
        counts[base] += 1
        return `${base}-${counts[base]}`
      }
      counts[base] = 1
      return base
    },
  }
}
