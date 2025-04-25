import DOMPurify from 'isomorphic-dompurify'

export const HTMLRenderer = (props: { html: string }) => {
  const sanitizedHtml = DOMPurify.sanitize(props.html)
  return <div className="html-renderer" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
}
