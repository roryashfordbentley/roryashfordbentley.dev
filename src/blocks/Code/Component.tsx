import React from 'react'
import { Code } from '@components/Code/Code'

export type CodeBlockProps = {
  label?: string
  language: string
  code: string
  hideHeader?: boolean
  blockType?: 'code'
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ label, language, code, hideHeader }) => {
  return (
    <div className="code-block">
      <Code label={label || ''} language={language} codeString={code} hideHeader={hideHeader} />
    </div>
  )
}
