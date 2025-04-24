import React from 'react'
import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'

import { VideoEmbedBlock } from '@blocks/VideoEmbed/Component'
import { CodeBlock } from '@blocks/Code/Component'
import { BlockWrapper } from '@components/BlockWrapper/BlockWrapper'

type NodeTypes = DefaultNodeTypes

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    videoEmbed: ({ node }: { node: SerializedBlockNode }) => {
      return (
        <BlockWrapper layout={node.fields.blockLayoutField}>
          <VideoEmbedBlock videoEmbedURL={node.fields.videoEmbedURL} />
        </BlockWrapper>
      )
    },
    code: ({ node }: { node: SerializedBlockNode }) => {
      return (
        <BlockWrapper layout={node.fields.blockLayoutField}>
          <CodeBlock
            code={node.fields.codeBlockCode || ''}
            label={node.fields.codeBlockLabel || ''}
          />
        </BlockWrapper>
      )
    },
  },
})

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} converters={jsxConverters} disableContainer />
}
