import React from 'react'

import { Link } from 'react-router-dom'

import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl,demoChannelTitle} from '../utils/constance'
const VideoCard = ( { video: { id: { videoId, channelId }, snippet }}) => {

    const timeRelease = () => {
                // Define o horário que você deseja converter
        const timeToConvert = snippet?.publishTime;

        // Cria um novo objeto Date com o horário que você deseja converter
        const convertedTime = new Date(timeToConvert);

        // Obtém o número de milissegundos desde 1 de janeiro de 1970 até o horário que você deseja converter
        const timeInMilliseconds = convertedTime.getTime();

        // Obtém o número de milissegundos desde 1 de janeiro de 1970 até a hora atual
        const currentTimeInMilliseconds = Date.now();

        const timeSinceReleased = currentTimeInMilliseconds - timeInMilliseconds;

        // Subtrai o número de milissegundos do horário que você deseja converter do número de milissegundos da hora atual
        const millisecondsMinute = 60000;
        const millisecondsPerHour = 3600000;
        const millisecondsPerDay = 86400000;
        const millisecondsPerMonth = 2592000000;
        const millisecondsPerYear = 31536000000;
        

        // Calcula o número de horas, dias e anos transcorridos
        const minutesSinceRelease = Math.floor(timeSinceReleased / millisecondsMinute);
        const hoursSinceReleased = Math.floor(timeSinceReleased / millisecondsPerHour);
        const daysSinceReleased = Math.floor(timeSinceReleased / millisecondsPerDay);
        const monthSinceReleased = Math.floor(timeSinceReleased / millisecondsPerMonth);
        const yearsSinceReleased = Math.floor(timeSinceReleased / millisecondsPerYear);
        
        if(minutesSinceRelease < 60){
            return minutesSinceRelease + ' Minutes'
        } else if(hoursSinceReleased < 24)
        {
            return hoursSinceReleased + ' Hours'
        } else if(daysSinceReleased < 31)
        {
            return daysSinceReleased + ' Days'
        } else if(monthSinceReleased < 12)
        {
            return monthSinceReleased + ' Months' 
        } else if(yearsSinceReleased < 365)
        {
            return yearsSinceReleased + ' Years' 
        }



        // Exibe o número de milissegundos transcorridos entre os dois horários
        console.log(timeSinceReleased);
    return timeRelease;
    }
    
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
                    {snippet?.title.slice(0,55) || demoVideoTitle.slice(0,55)}
                </Typography>
                <Typography sx={{color:'gray', fontSize:'12px', fontWeight:'bold'}}>
                    {timeRelease()} 
                </Typography>
            </Link>
            <Link to={snippet?.channelId?`/channel/${channelId}`:demoChannelUrl}>
                <Typography variant='subtitle2' sx={{color:'gray', fontWeight:'bold'}}>
                    {snippet?.channelTitle.slice(0,55) || demoChannelTitle.slice(0,55)}
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