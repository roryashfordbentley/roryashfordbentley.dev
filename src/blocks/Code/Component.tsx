import React from 'react'
import { Code } from '@components/Code/Code'

export type CodeBlockProps = {
  codeBlockCode: string
  codeBlocklabel?: string
  blockType: 'code'
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ codeBlocklabel, codeBlockCode }) => {
  return (
    <div className="code-block">
      <Code label={codeBlocklabel || ''} codeString={codeBlockCode} />
    </div>
  )
}
