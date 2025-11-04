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
            language={node.fields.codeBlockLanguage || 'jsx'}
            hideHeader={node.fields.hideHeader || false}
          />
        </BlockWrapper>
      )
    },
    bigImage: ({ node }: { node: SerializedBlockNode }) => {
      return (
        <BlockWrapper layout={node.fields.blockLayoutField}>
          <BigImageBlock
            image={node.fields.image}
            caption={node.fields.caption}
            credit={node.fields.credit}
            creditLink={node.fields.creditLink}
          />
        </BlockWrapper>
      )
    },
    informationBox: ({ node }: { node: SerializedBlockNode }) => {
      console.log(node)

      return (
        <BlockWrapper layout={node.fields.blockLayoutField}>
          <InformationBoxBlock informationBoxContent={node.fields.informationBoxContent} />
        </BlockWrapper>
      )
    },
  },
})

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} converters={jsxConverters} disableContainer />
}
