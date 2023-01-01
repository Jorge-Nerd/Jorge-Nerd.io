import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { fetchAPI } from "../utils/fetchAPI";

const VideoDetail = () => {
  const{id}=useParams();

  useEffect(()=>{
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
  },[])
  return( 
    <Box minHeight='95vh'>
      <Stack sx={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
            <ReactPlayer />
          </Box>
        </Box>
      </Stack>
     
    </Box>
    );
};

export default VideoDetail;
