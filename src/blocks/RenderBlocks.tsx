import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { CodeBlock } from '@blocks/Code/Component'
import { Container, ContainerItem } from '@/components/Container/Container'

/**
 * Block Components
 *
 * Developer defined list of block components (i.e. the components used to render the block data).
 * key must equal block slug.
 */
const blockComponentsRegister = {
  code: CodeBlock,
}

/**
 * Render Blocks - functional component
 */
export const RenderBlocks: React.FC<{
  blocks: Post['layout']
}> = (props) => {
  const { blocks } = props

  if (blocks && Array.isArray(blocks) && blocks.length > 0) {
    return (
      <Container>
        {blocks.map((block, index) => {
          const { blockType } = block

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
