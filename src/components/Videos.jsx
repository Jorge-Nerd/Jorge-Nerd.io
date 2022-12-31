import React from 'react'

import {Stack, Box} from'@mui/material'

import VideoCard from './VideoCard'
import ChannelVideo from './ChannelVideo'

const Videos = ({videos}) => {
 console.log(videos)

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2} alignItems='start'>
      {videos.map((video, index)=>(
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video}/>}
          {/* {video.id.channelId && <ChannelVideo video={video}/>} */}
        </Box>  
      ))}
    </Stack>
  )
}

export default Videos