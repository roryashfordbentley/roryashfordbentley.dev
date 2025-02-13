import React from 'react'
import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

/*const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    // myTextBlock is the slug of the block
    //myTextBlock: ({ node }) => <div style={{ backgroundColor: 'red' }}>{node.fields.text}</div>,
  },
})*/

/*export const LexicalToJSX = ({ lexicalData }) => {
  return (
    <RichText
      converters={jsxConverters}
      data={lexicalData.lexicalWithBlocks as SerializedEditorState}
    />
  )
}*/

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} />
}
