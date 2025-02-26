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
  options: ['default', 'full', 'narrow'],
  defaultValue: 'default',
}
