import type { Meta, StoryObj } from '@storybook/react'

import { Container } from './Container'
import { ContainerItem } from './Container'
import { WireframeBox } from '@components/WireframeBox/WireframeBox'
import { FeaturedImage } from '@components/FeaturedImage/FeaturedImage'
import { Default as DefaultFeaturedImage } from '@components/FeaturedImage/FeaturedImage.stories'
import { Prose } from '@components/Prose/Prose'
import { Default as DefaultProse } from '@components/Prose/Prose.stories'
import { Header } from '@components/Header/Header'
import { Default as DefaultHeader } from '@components/Header/Header.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Utility/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>

export default meta

export const Default: Story = {
  args: {
    children: [
      <ContainerItem>
        <WireframeBox title="Default width item" content="This is a normal item" />
      </ContainerItem>,
      <ContainerItem layout="full">
        <WireframeBox
          title="Full width item"
          content="Used when you want elements to appear edge-to-edge "
        />
      </ContainerItem>,
      <ContainerItem layout="narrow">
        <WireframeBox
          title="Narrow width item"
          content="Great for Prose and areas of text. This narrow column is designed to provider better readability "
        />
      </ContainerItem>,
    ],
  },
}

export const Debug: Story = {
  args: {
    children: [
      <ContainerItem>
        <WireframeBox title="Default width item" content="This is a normal item" />
      </ContainerItem>,
      <ContainerItem layout="full">
        <WireframeBox
          title="Full width item"
          content="Used when you want elements to appear edge-to-edge "
        />
      </ContainerItem>,
      <ContainerItem layout="narrow">
        <WireframeBox
          title="Narrow width item"
          content="Great for Prose and areas of text. This narrow column is designed to provider better readability "
        />
      </ContainerItem>,
    ],
    debug: true,
  },
}

export const ComponentExample: Story = {
  args: {
    children: [
      <ContainerItem>
        <Header {...DefaultHeader.args} />
      </ContainerItem>,
      <ContainerItem layout="full">
        <FeaturedImage {...DefaultFeaturedImage.args} />
      </ContainerItem>,
      <ContainerItem layout="narrow">
        <Prose padded {...DefaultProse.args} />
      </ContainerItem>,
    ],
    debug: true,
  },
}
