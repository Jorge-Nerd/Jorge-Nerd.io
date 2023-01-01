import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import ChannelVideo from './ChannelVideo'
import Videos from './Videos'

import { fetchAPI } from "../utils/fetchAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // console.log(channelDetail);
  console.log(videos);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    )
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    )
  }, [id]);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(141,126,149,1) 24%, rgba(176,102,201,1) 50%, rgba(141,126,149,1) 76%)',
          zIndex:'10',
          height:'200px'
        }}/>
          <ChannelVideo marginTop='-100px' channelDetail={channelDetail} />
      </Box>
      <Box display='flex' p={2} >
        <Box sx={{mr:{sm:'130px'}}} />
          <Videos videos={videos} />

      </Box>

      
    </Box>
    );
};

export default ChannelDetail;
