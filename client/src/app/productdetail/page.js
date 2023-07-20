"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";

const Productdetails =  () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
          setProductDetail(data);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
    };
    fetchProduct();
  }, [id]);
  return (
    <>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box>
              <Typography>PRODUCT DETAILS</Typography>
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography>Name: {productDetail?.title}</Typography>
              <Typography>Category: {productDetail?.category} </Typography>
              <Typography>Price: $ {productDetail?.price}</Typography>
              <Typography>
                Rating: {productDetail?.rating}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="p">Description: {productDetail?.description}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Productdetails;
