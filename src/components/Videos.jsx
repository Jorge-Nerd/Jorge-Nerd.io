import React from 'react'

import {Stack, Box} from'@mui/material'

import VideoCard from './VideoCard'
import ChannelVideo from './ChannelVideo'
import Loader from './Loader'

const Videos = ({videos, direction}) => {
 console.log(videos)

 if(!videos?.length) return <Loader />

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2} alignItems='start' >
      {videos.map((video, index)=>(
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelVideo channelDetail={video}/>}
        </Box>  
      ))}
    </Stack>
  )
}

export default Videos