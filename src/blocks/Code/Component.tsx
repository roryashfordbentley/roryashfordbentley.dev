import { Code } from '@components/Code/Code'

export const CodeBlock = (props: { codeBlockLabel: string; codeBlockCode: string }) => {
  return (
    <div className="code-block">
      <Code label={props.codeBlockLabel} codeString={props.codeBlockCode} />
    </div>
  )
}
