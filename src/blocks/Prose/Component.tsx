import React from 'react'
import { Prose } from '@components/Prose/Prose'

import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

export type ProseBlockProps = {
  proseEditor: SerializedEditorState<SerializedLexicalNode>
  blockType: 'prose'
}

export const ProseBlock: React.FC<ProseBlockProps> = ({ proseEditor }) => {
  const content = proseEditor

  return (
    <div className="prose-block">
      <Prose>
        <LexicalToJSX data={content} />
      </Prose>
    </div>
  )
}
