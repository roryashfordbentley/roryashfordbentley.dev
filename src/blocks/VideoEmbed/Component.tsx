import React from 'react'
import { VideoEmbed } from '@components/VideoEmbed/VideoEmbed'

export type VideoEmbedBlockProps = {
  videoEmbedBlockLabel?: string
  videoEmbedURL: string
  //blockType: 'videoEmbed'
}

export const VideoEmbedBlock: React.FC<VideoEmbedBlockProps> = ({ videoEmbedURL }) => {
  return (
    <div className="video-embed-block">
      {videoEmbedURL}
      <VideoEmbed videoURL={videoEmbedURL || ''} />
    </div>
  )
}
