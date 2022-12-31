import { useState, useEffect } from "@mui/material";

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {Sidebar, Videos} from "../components";


const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "10px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "9vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          ml={4}
          sx={{
            color: "#fff",
          }}
        >
         
          Jailson
          {" "}
          <span
            style={{
              color: "#F31503",
            }}
          >
            videos
          </span>
        </Typography>
      </Box>
      <Videos />
    </Stack>
  );
};

export default Feed;
