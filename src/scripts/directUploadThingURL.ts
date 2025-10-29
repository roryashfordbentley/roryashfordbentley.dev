/**
 * Convert a Payload media URL to UploadThing CDN URL.
 * If the URL is already a CDN URL, returns it unchanged.
 *
 * the reason this exists is because images are processed by payload which adds 500ms
 * of latency per request. This allows us to serve the images direct from the CDN cache on
 * Uploadthing.
 */
export function directUploadThingURL(url: string, key?: string) {
  if (!url) return ''

  // Already a full UploadThing URL
  if (url.startsWith('https://') && url.includes('.ufs.sh')) return url

  // Use the _key if available
  if (key) return `https://utfs.io/f/${key}`

  // Fallback: just return the original URL
  return url
}
