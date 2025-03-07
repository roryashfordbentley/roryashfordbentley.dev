import React from 'react'
import { type JSXConvertersFunction, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export const LexicalToJSX = ({ data }: { data: SerializedEditorState }) => {
  return <RichText data={data} />
}
