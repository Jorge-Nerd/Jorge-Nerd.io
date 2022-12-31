import React from 'react'

import { Link } from 'react-router-dom'

import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {demoThumbnailUrl, demoVideooUrl, demoTitle, demoChannelUrl} from '../utils/constance'
const VideoCard = ( { video: { id: { videoId }, snippet }}) => {
    
  return (
    <Card>
        <Link to=''>
            <CardMedia image={snippet?.thumbnails?.high?.url}/>
        </Link>
    </Card>
  )
}

export default VideoCard