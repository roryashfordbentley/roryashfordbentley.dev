import type { Field } from 'payload'

/**
 * Layout Field
 *
 * This field definition is used to add a select field to the block editor.
 * It is used to select the layout for the block.
 *
 * The options are 'default', 'full' and 'narrow'.
 * This should be added to all block definitions.
 */
export const layoutField: Field = {
  name: 'blockLayoutField',
  label: 'Block Layout',
  admin: {
    description: 'Select the layout for this block',
  },
  type: 'select',
  options: [
    {
      label: 'Default (Prose area for content)',
      value: 'default',
    },
    {
      label: 'Wide (breaks out of content area to emphasise)',
      value: 'wide',
    },
    {
      label: 'Full Width (edge-to-edge layout)',
      value: 'full',
    },
  ],
  defaultValue: 'default',
}
