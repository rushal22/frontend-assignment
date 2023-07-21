"use client";

import { Box } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";


const Typewrite = () => {
  return (
     <Box>
      <Typewriter
         options={{
          strings: ['Thank You For Visiting!', 'Welcome To Online Store ☻'],
          autoStart: true,
          loop: true,  
        }}
        
      />
    </Box>
  );
};

export default Typewrite;
