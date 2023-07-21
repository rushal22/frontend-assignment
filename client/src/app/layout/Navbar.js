"use client ";

import React from "react";
import { Box, AppBar, Toolbar, MenuItem, Grid } from "@mui/material";
import Link from "next/link";
import OnlineStoreIcon from '@mui/icons-material/Store'
import SearchIcon from '@mui/icons-material/Search'

const Navbar = () => {
  return (
    <>
      <Box sx={{ marginBottom: "65px" }}>
        <AppBar
          position="fixed"
          sx={{
            marginleft: "5px",
            width: `100%`,
          }}
          color="secondary"
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Link href="/">
              <MenuItem style={{ paddingRight: 20, paddingLeft: 20 , fontFamily: "unset" , fontSize : "20px" }}>
              <OnlineStoreIcon sx={{ marginRight: 1 }} />
                Online Store
              </MenuItem>
            </Link>
            <Link href="/search">
              <MenuItem style={{ paddingRight: 50, paddingLeft: 50 , fontFamily: "unset" , fontSize: "20px" }}>
                <SearchIcon sx={{ marginRight: 1 }}/>
                Search
              </MenuItem>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
