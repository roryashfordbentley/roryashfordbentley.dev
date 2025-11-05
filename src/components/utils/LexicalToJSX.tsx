import React from 'react'
import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

import { VideoEmbedBlock } from '@blocks/VideoEmbed/Component'
import { CodeBlock } from '@blocks/Code/Component'
import { BigImageBlock } from '@blocks/BigImage/Component'
import { BlockWrapper } from '@components/BlockWrapper/BlockWrapper'
import { InformationBoxBlock } from '@/blocks/InformationBox/Component'

type NodeTypes = DefaultNodeTypes

// Utility to create URL-safe slugs
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

// Map to track used slugs (so we can append "-2", "-3", etc.)
const slugCount: Record<string, number> = {}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,

  heading: ({ node, nodesToJSX }) => {
    // Render children properly (include both parent + nodes)
    const children = nodesToJSX({ parent: node, nodes: node.children })

    // Extract text content for slug generation
    const text =
      node.children?.map((child: any) => child.text || '').join('') ||
      (Array.isArray(children)
        ? children.map((child) => (typeof child === 'string' ? child : '')).join('')
        : '')

    let baseSlug = slugify(text)
    if (!baseSlug) baseSlug = 'section'

    // Handle duplicate slugs (Overview → overview, overview-2, etc.)
    let uniqueSlug = baseSlug
    if (slugCount[baseSlug]) {
      slugCount[baseSlug] += 1
      uniqueSlug = `${baseSlug}-${slugCount[baseSlug]}`
    } else {
      slugCount[baseSlug] = 1
    }

    // Add anchor link inside each heading
    const anchor = (
      <a href={`#${uniqueSlug}`} aria-label={`Link to ${text}`} className="anchor">
        #
      </a>
    )

    // Render the appropriate heading level
    switch (node.tag) {
      case 'h1':
        return (
          <h1 id={uniqueSlug}>
            {anchor}
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 id={uniqueSlug}>
            {anchor}
            {children}
          </h2>
        )
      case 'h3':
        return (
          <h3 id={uniqueSlug}>
            {anchor}
            {children}
          </h3>
        )
      case 'h4':
        return (
          <h4 id={uniqueSlug}>
            {anchor}
            {children}
          </h4>
        )
      case 'h5':
        return (
          <h5 id={uniqueSlug}>
            {anchor}
            {children}
          </h5>
        )
      case 'h6':
        return (
          <h6 id={uniqueSlug}>
            {anchor}
            {children}
          </h6>
        )
      default:
        // fallback
        return (
          <h2 id={uniqueSlug} className="group scroll-mt-24">
            {anchor}
            {children}
          </h2>
        )
    }
  },

  // ✅ Your existing custom blocks remain unchanged
  blocks: {
    videoEmbed: ({ node }: { node: SerializedBlockNode }) => (
      <BlockWrapper layout={node.fields.blockLayoutField}>
        <VideoEmbedBlock videoEmbedURL={node.fields.videoEmbedURL} />
      </BlockWrapper>
    ),
    code: ({ node }: { node: SerializedBlockNode }) => (
      <BlockWrapper layout={node.fields.blockLayoutField}>
        <CodeBlock
          code={node.fields.codeBlockCode || ''}
          label={node.fields.codeBlockLabel || ''}
          language={node.fields.codeBlockLanguage || 'jsx'}
          hideHeader={node.fields.hideHeader || false}
        />
      </BlockWrapper>
    ),
    bigImage: ({ node }: { node: SerializedBlockNode }) => (
      <BlockWrapper layout={node.fields.blockLayoutField}>
        <BigImageBlock
          image={node.fields.image}
          caption={node.fields.caption}
          credit={node.fields.credit}
          creditLink={node.fields.creditLink}
        />
      </BlockWrapper>
    ),
    informationBox: ({ node }: { node: SerializedBlockNode }) => (
      <BlockWrapper layout={node.fields.blockLayoutField}>
        <InformationBoxBlock informationBoxContent={node.fields.informationBoxContent} />
      </BlockWrapper>
    ),
  },
})

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  // Reset slug counter each render
  Object.keys(slugCount).forEach((key) => delete slugCount[key])

  return <RichText data={data} converters={jsxConverters} disableContainer />
}
