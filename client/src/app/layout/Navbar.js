"use client "

import React from "react";
import { Box, AppBar, Toolbar, MenuItem } from "@mui/material";
import Link from "next/link";

const Navbar = () => {




  return (
    <>
      <Box sx={{ marginBottom: "100px" }}>
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
              <MenuItem style={{ paddingRight: 20, paddingLeft: 20,  }} >
                Online Store
              </MenuItem>
            </Link>
            <Link href="/search">
              <MenuItem style={{ paddingRight: 50, paddingLeft: 50 }} >
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
