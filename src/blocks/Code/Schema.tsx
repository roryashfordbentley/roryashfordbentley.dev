import type { Block } from 'payload'
import { layoutField } from '@blocks/LayoutField'
import { Field } from 'payload'

/*export const CodeContent: Field = {
  name: 'codeContent',
  label: 'Code Content',
  required: true,
  type: 'code',
  admin: {
    components: {
      Field: '@/fields/code/codeComponent.tsx',
    },
    language: 'javascript', // Default language for the editor
    editorOptions: {
      theme: 'light', // example of props that can be passed
    },
  },
}*/

export const CodeBlockSchema: Block = {
  slug: 'code',
  fields: [
    layoutField,
    {
      name: 'codeBlockLanguage',
      type: 'select',
      label: 'Language',
      options: [
        // Based  on these supported languages https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages
        { label: 'C++', value: 'cpp' },
        { label: 'CSS', value: 'css' },
        { label: 'Dockerfile', value: 'dockerfile' },
        { label: 'Handlebars', value: 'handlebars' },
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
          theme: 'light', // example of props that can be passed
        },
      },
    },
    {
      name: 'codeBlockLabel',
      type: 'text',
    },

    {
      name: 'hideHeader',
      type: 'checkbox',
      label: 'Hide Header',
      defaultValue: false,
    },
  ],
}
