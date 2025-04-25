import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'

export const CodeBlockSchema: Block = {
  slug: 'code',
  fields: [
    layoutField,
    {
      name: 'codeBlockCode',
      type: 'code',
      label: false,
      required: true,
      admin: {
        components: {
          Field: '@/fields/code/codeComponent.tsx',
        },
        language: 'javascript', // Default language for the editor
        editorOptions: {
          theme: 'vs-dark',
          lineNumbers: 'off',
        },
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'codeBlockLabel',
          type: 'text',
        },
        {
          name: 'codeBlockLanguage',
          type: 'select',
          label: 'Language',
          options: [
            // Based  on these supported languages https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages
            { label: 'C++', value: 'cpp' },
            { label: 'CSS', value: 'css' },
            { label: 'Dockerfile', value: 'dockerfile' },
            { label: 'HTML', value: 'html' },
            { label: 'JavaScript', value: 'javascript' },
            { label: 'JSON', value: 'json' },
            { label: 'Markdown', value: 'markdown' },
            { label: 'PHP', value: 'php' },
            { label: 'Python', value: 'python' },
            { label: 'Ruby', value: 'ruby' },
            { label: 'SCSS', value: 'scss' },
            { label: 'Shell', value: 'shell' },
            { label: 'SQL', value: 'sql' },
            { label: 'TypeScript', value: 'typescript' },
            { label: 'XML', value: 'xml' },
            { label: 'YAML', value: 'yaml' },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'hideHeader',
      type: 'checkbox',
      label: 'Hide Header',
      defaultValue: false,
    },
  ],
}
