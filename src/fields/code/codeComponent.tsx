'use client'

import { CodeField } from '@payloadcms/ui'
import { CodeFieldClientProps } from 'payload'
import { useField } from '@payloadcms/ui'
import React from 'react'

/**
 * Custom Code Component
 *
 * this component facilitates switching languages from  dropdown (codeBlockLanguage) to the editor
 * Inspiration: https://github.com/payloadcms/payload/issues/8046
 */

const CodeComponent: React.FC<CodeFieldClientProps> = ({ field, path }) => {
  const pathCopy = path
  const codeLanguagePath = pathCopy.replace('codeBlockCode', 'codeBlockLanguage')
  const { value: languageValue } = useField<string>({ path: codeLanguagePath })
  field.admin?.editorOptions

  return (
    <>
      {languageValue}
      <CodeField
        key={codeLanguagePath + (languageValue || 'javascript')}
        path={path} // Explicitly pass the required path property
        field={{
          name: path,
          admin: {
            language: languageValue, // Dynamically use the selected language value
            editorOptions: field.admin?.editorOptions || {}, // Pass any editor options as needed
          },
        }}
      />
    </>
  )
}

export default CodeComponent
