import React from "react";
import { Box, Stack, Item, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../utils/images/logo-cyber.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#212121",
        boxShadow: '0px 5px 5px rgba(239, 239, 240, 0.2) ',
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to='/' style={{display:'flex', alignItems:'center'}}>
        <img className="logo-img" src={logo} alt="logo" height={50} width={60}/>

      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
