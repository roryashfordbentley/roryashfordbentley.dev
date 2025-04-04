import React from 'react'
import Image from 'next/image'

import { GridList, GridListItem } from '@components/GridList/GridList'

export type GridListBlockProps = {
  gridListBlockTitle: string
  gridListBlockDescription: string
  gridListBlockList: Array<{
    gridListBlockItemImage: { url: string; alt?: string } | undefined
    gridListBlockItemTitle: string
    gridListBlockItemDescription: string
  }>
  blockType: 'gridList'
}

export const GridListBlock: React.FC<GridListBlockProps> = ({
  gridListBlockTitle,
  gridListBlockDescription,
  gridListBlockList,
}) => {
  //console.log(gridListBlockList)

  return (
    <div className="grid-list-block">
      <GridList title={gridListBlockTitle} description={gridListBlockDescription}>
        {gridListBlockList.map((item, index) => (
          <GridListItem
            key={index}
            /* HACK: this find/replace allows use to load images directly from the public folder and not via API which requires media to be on a remote store. As these are icons it should be OK but could do with a refactor probably. */
            iconPath={item.gridListBlockItemImage?.url?.replace('/api/icons/file/', 'icons/') || ''}
            title={item.gridListBlockItemTitle}
            description={item.gridListBlockItemDescription}
          />
        ))}
      </GridList>
    </div>
  )
}
