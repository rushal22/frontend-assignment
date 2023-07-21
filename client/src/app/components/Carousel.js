"use client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const MyCarousel = ({ products }) => {
  return (
    <>
      {products && products.length ? (
        <Box display={"flex"} justifyContent={"center"} padding={"5px"}>
          <Carousel>
            {products?.map((item, i) => (
              <Grid key={i} position={"initial"} height={300} width={900}>
                <Image
                  src={item?.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                />
              </Grid>
            ))}
          </Carousel>
        </Box>
      ) : null}
    </>
  );
};

export default MyCarousel;
