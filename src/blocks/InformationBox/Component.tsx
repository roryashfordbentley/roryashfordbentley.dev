import React from 'react'
import { InformationBox } from '@components/InformationBox/InformationBox'

import { LexicalToJSX } from '@/components/utils/LexicalToJSX'
import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

export type InformationBoxBlockProps = {
  informationBoxContent: SerializedEditorState<SerializedLexicalNode>
  blockType?: 'informationBox'
}

export const InformationBoxBlock: React.FC<InformationBoxBlockProps> = ({
  informationBoxContent,
}) => {
  const content = informationBoxContent

  return (
    <div className="information-box-block">
      <InformationBox content={informationBoxContent && <LexicalToJSX data={content} />} />
    </div>
  )
}
