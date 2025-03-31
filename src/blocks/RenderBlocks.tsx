import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Container, ContainerItem } from '@/components/Container/Container'

import { CodeBlock } from '@blocks/Code/Component'
import { HeroBlock } from '@blocks/Hero/Component'
import { ProseBlock } from '@blocks/Prose/Component'
import { BigImageBlock } from '@blocks/BigImage/Component'
import { InformationBoxBlock } from '@blocks/InformationBox/Component'
import { GridListBlock } from '@blocks/GridList/Component'

/**
 * Block Components
 *
 * Developer defined list of block components (i.e. the components used to render the block data).
 * key must equal block slug.
 */
const blockComponentsRegister: { [key: string]: React.FC<any> } = {
  code: CodeBlock,
  hero: HeroBlock,
  prose: ProseBlock,
  bigImage: BigImageBlock,
  informationBox: InformationBoxBlock,
  gridList: GridListBlock,
}

/**
 * Render Blocks - functional component
 */
export const RenderBlocks: React.FC<{
  blocks: Array<any>
}> = (props) => {
  const { blocks } = props

  if (blocks && Array.isArray(blocks) && blocks.length > 0) {
    return (
      <Container>
        {blocks.map((block, index) => {
          const { blockType } = block as { blockType: string }

          //console.log(blockType)

          /**
           * Check for layout type
           */

          let itemLayout: 'full' | 'narrow' | 'debug' | undefined = block.blockLayoutField as
            | 'full'
            | 'narrow'
            | 'debug'
            | undefined

          /**
           * If blockType is defined within the collection (Posts, Pages etc)
           * and the blockType is registered as a block component then render
           * the block component
           */
          if (blockType && blockType in blockComponentsRegister) {
            const Block = blockComponentsRegister[blockType]

            if (Block) {
              //console.log(block)

              return (
                <ContainerItem key={index} layout={itemLayout}>
                  <Block {...block} />
                </ContainerItem>
              )
            }
          }

          return null
        })}
      </Container>
    )
  }

  return null
}
