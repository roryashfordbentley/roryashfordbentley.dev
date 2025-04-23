import React from 'react'
import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

import { VideoEmbedBlock } from '@blocks/VideoEmbed/Component'
import { CodeBlock } from '@blocks/Code/Component'

type NodeTypes = DefaultNodeTypes

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    videoEmbed: ({ node }: { node: SerializedBlockNode }) => {
      return (
        <div
          className={node.fields.blockLayoutField && `block-layout-${node.fields.blockLayoutField}`}
        >
          <VideoEmbedBlock videoEmbedURL={node.fields.videoEmbedURL} />
        </div>
      )
    },
    code: ({ node }: { node: SerializedBlockNode }) => {
      console.log('Code block node:', node)
      return (
        <div
          className={node.fields.blockLayoutField && `block-layout-${node.fields.blockLayoutField}`}
        >
          <CodeBlock
            codeBlockCode={node.fields.codeBlockCode || ''}
            codeBlockLabel={node.fields.codeBlockLabel || ''}
          />
        </div>
      )
    },
  },
})

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} converters={jsxConverters} disableContainer />
}
