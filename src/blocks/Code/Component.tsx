import React from 'react'
import { Code } from '@components/Code/Code'

export type CodeBlockProps = {
  label?: string
  code: string
  hideHeader?: boolean
  blockType?: 'code'
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ label, code, hideHeader }) => {
  return (
    <div className="code-block">
      <Code label={label || ''} codeString={code} hideHeader={hideHeader} />
    </div>
  )
}
