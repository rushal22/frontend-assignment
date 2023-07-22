"use client";
import { Box } from "@mui/material";
import Image from "next/image";

const Loader = () => {
  return (
    <Box
      key={"loaders"}
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      
    >
      <Image
        priority = "high"
        src={"/images/loading1.gif"}
        alt={"loader"}
        width={500}
        height={400}
      />
    </Box>
  );
};

export default Loader;
