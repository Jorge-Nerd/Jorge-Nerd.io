import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {Link} from 'react-router-dom';

import {demoProfilePicture} from '../utils/constance';

const ChannelVideo = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:{xs:'356px', md:'300px'},
      height:'306px',
      margin:'auto',
      marginTop
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'#fff'}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius:'50%', height:'180px', width:'180px ', border:'1px solid #e3e3e3'
          }} />
          <Typography variant='h6' sx={{textAlign:'center'}}>
            {channelDetail?.snippet?.title} <br />
            {parseInt(channelDetail?.snippet?.publishTime).toString()}
            <CheckCircle
                    sx={{fontSize:14, color:'gray', ml:'5px'}}
                />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelVideo