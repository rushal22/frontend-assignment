"use client";
import { useQuery } from "@tanstack/react-query";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import MyCarousel from "../components/Carousel";
import Loader from "../components/Loader";
import Typewrite from "../components/Typewriter";

const Home = () => {
  const { data, isLoading } = useQuery(["products"], async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    return data;
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box bgcolor={"dimgray"}>
        <Grid
          fontSize={"8vh"}
          fontFamily={"fantasy"}
          color={"palegoldenrod"}
          textAlign={"center"}
        >
          <Typewrite />

          <Grid fontSize={"10px"} width="90%" margin={"auto"}>
            <MyCarousel products={data} />
            
            <Box display="flex" justifyContent="center" alignItems="center">
              <Grid container spacing={4}>
                {data &&
                  data?.length &&
                  data.map((product) => (
                    <ProductCard key={product?.id} product={product} />
                  ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        </Box>
      )}
    </>
  );
};

export default Home;
