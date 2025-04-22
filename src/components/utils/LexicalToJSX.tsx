import React from 'react'
import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'

import { VideoEmbed } from '@components/VideoEmbed/VideoEmbed'
import { VideoEmbedBlock } from '@/blocks/VideoEmbed/Component'

type NodeTypes = DefaultNodeTypes

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    testBlock: ({ node }) => {
      //console.log('testBlock', node)
      return (
        <div className="test-block">
          <h2>{node.fields.testField}</h2>
        </div>
      )
    },
    videoEmbed: ({ node }) => {
      return <VideoEmbedBlock videoEmbedURL={node.fields.videoEmbedURL} />
    },
  },
})

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} converters={jsxConverters} />
}
