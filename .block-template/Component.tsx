import React from 'react'
import { Example } from '@components/Example/Example'

export type {{pascalCase name}}BlockProps = {
  {{camelCase name}}BlockLabel?: string
  blockType: '{{ camelCase name }}'
}

export const {{ name }}Block: React.FC<{{pascalCase name }}BlockProps> = ({}) => {
  return (
    <div className="{{ hyphenCase name }}-block">
      <Example />
    </div>
  )
}
