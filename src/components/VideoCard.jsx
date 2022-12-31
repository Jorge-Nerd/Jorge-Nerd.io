import React from 'react'

import { Link } from 'react-router-dom'

import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl,demoChannelTitle} from '../utils/constance'
const VideoCard = ( { video: { id: { videoId, channelId }, snippet }}) => {
    
  return (
    <Card className='card-video' sx={{width:{md:'300px', xs:'100%'},
    boxShadow:'none', borderRadius:0}}>
        <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia 
                alt={snippet?.title}
                image={snippet?.thumbnails?.high?.url}
                sx={{width:358, height:180}}
                />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
            <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
                <Typography variant='subtitle1' sx={{color:'white', fontWeight:'bold'}}>
                    {snippet?.title.slice(0,70) || demoVideoTitle.slice(0,70)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId?`/channel/${channelId}`:demoChannelUrl}>
                <Typography variant='subtitle2' sx={{color:'gray', fontWeight:'bold'}}>
                    {snippet?.channelTitle.slice(0,70) || demoChannelTitle.slice(0,70)}
                    <CheckCircle
                    sx={{fontSize:12, color:'gray', ml:'5px'}}
                />
                </Typography>

            </Link>
        </CardContent> 
    </Card>
  )
}

export default VideoCard