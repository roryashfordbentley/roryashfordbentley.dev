import type { Meta, StoryObj } from '@storybook/nextjs'

import { TableOfContents } from './TableOfContents'

import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableOfContents>

export default meta

const mockSerializedEditorState: SerializedEditorState = {
  root: {
    children: [
      {
        type: 'heading',
        tag: 'h2',
        format: '',
        indent: 0,
        direction: null,
        version: 1,
        children: [
          {
            text: 'Introduction',
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            version: 1,
          },
        ],
      },
      {
        type: 'heading',
        tag: 'h2',
        format: '',
        indent: 0,
        direction: null,
        version: 1,
        children: [
          {
            text: 'Conclusion',
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            version: 1,
          },
        ],
      },
    ],
    type: 'root',
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
} as unknown as SerializedEditorState

export const Default: Story = {
  args: {
    data: mockSerializedEditorState,
  },
}
