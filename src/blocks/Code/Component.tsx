import React from 'react'
import { Code } from '@components/Code/Code'

export type CodeBlockProps = {
  codeBlockLabel?: string
  codeBlockCode: string
  blockType?: 'code'
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ codeBlockLabel, codeBlockCode }) => {
  return (
    <div className="code-block">
      <Code label={codeBlockLabel || ''} codeString={codeBlockCode} />
    </div>
  )
}
