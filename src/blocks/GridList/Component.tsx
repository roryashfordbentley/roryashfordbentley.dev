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
  return (
    <div className="grid-list-block">
      <GridList title={gridListBlockTitle} description={gridListBlockDescription}>
        {gridListBlockList.map((item, index) => (
          <GridListItem
            key={index}
            icon={
              item.gridListBlockItemImage?.url ? (
                <Image
                  src={item.gridListBlockItemImage.url}
                  alt={item.gridListBlockItemImage.alt || 'Image description not available'}
                  width={40}
                  height={40}
                />
              ) : null
            }
            title={item.gridListBlockItemTitle}
            description={item.gridListBlockItemDescription}
          />
        ))}
      </GridList>
    </div>
  )
}
