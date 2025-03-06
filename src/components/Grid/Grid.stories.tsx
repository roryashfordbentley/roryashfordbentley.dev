import type { Meta, StoryObj } from '@storybook/react'

import { Grid, GridItem } from './Grid'
import { WireframeBox } from '@components/WireframeBox/WireframeBox'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Utility/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>

export default meta

/**
 * This is a basic grid with one column. It is the default when no columns are specified.
 */
export const SingleColumnGrid: Story = {
  args: {
    columns: 1,
    //gutter: '1rem',
    children: Array(3).fill(
      <GridItem>
        <WireframeBox title="Grid item" />
      </GridItem>,
    ),
  },
}

/**
 * This is a 3 column grid example. It will have 3 columns at all screen sizes.
 */
export const ThreeColumnGrid: Story = {
  args: {
    columns: 3,
    children: Array(3).fill(
      <GridItem>
        <WireframeBox title="Grid item" />
      </GridItem>,
    ),
  },
}

/**
 * This is a 5 column grid example. It will have 5 columns at all screen sizes.
 */
export const FiveColumnGrid: Story = {
  args: {
    columns: 5,
    children: Array(10).fill(
      <GridItem>
        <WireframeBox title="Grid item" />
      </GridItem>,
    ),
  },
}

/**
 * This example shows how to use the columnSpan props to create a responsive grid
 * with different numbers of columns at different breakpoints.
 *
 * At the smallest size there is 1 column.
 * At the medium size there are 2 columns.
 * At the large size there are 4 column.
 *
 * Resize the browser window to see how the columns change.
 */
export const ResponsiveGrids: Story = {
  args: {
    columns: 1,
    columnsMedium: 2,
    columnsLarge: 4,
    children: Array(12).fill(
      <GridItem>
        <WireframeBox title="Grid item" />
      </GridItem>,
    ),
  },
}

/**
 * This example shows how to use the gutter prop to add a gutter between the grid items.
 */
export const Gutters: Story = {
  args: {
    columns: 3,
    gutter: true,
    children: Array(12).fill(
      <GridItem>
        <WireframeBox title="Grid item" />
      </GridItem>,
    ),
  },
}

/**
 * This example shows how to use the columnSpan prop on Grid Items to allow grid items to span multiple columns.
 */
export const ColumnSpans: Story = {
  args: {
    columns: 6,
    gutter: true,
    children: [
      <GridItem columnSpan={6}>
        <WireframeBox title="6 col" />
      </GridItem>,
      <GridItem columnSpan={3}>
        <WireframeBox title="3 col" />
      </GridItem>,
      <GridItem columnSpan={2}>
        <WireframeBox title="2 col" />
      </GridItem>,
      <GridItem columnSpan={1}>
        <WireframeBox title="1 col" />
      </GridItem>,
    ],
  },
}
