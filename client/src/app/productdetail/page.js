"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Button
} from "@mui/material";

const Productdetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [productDetail, setProductDetail] = useState(null);
  const [submitMsg, setSubmitMsg] = useState({});
  const [submitMsgStyle, setSubmitMsgStyle] = useState({
    display: "none",
  });
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/");
        const data = await res.json();
        data.forEach((product) => {
          console.log(product.id);
        });
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
     <Box>
        <Box
          sx={{
            top: "0",
            marginTop: "-10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={submitMsgStyle}>
            <Typography>{submitMsg.msg}</Typography>
          </Box>
        </Box>
        </Box>
        <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box
                sx={{
                  background: "red",
                  padding: "4px 7px",
                  borderRadius: "50%",
                  color: "white",
                  position: "absolute",
                  top: "0",
                }}
              >
                {/* {userCart.noOfProducts} */}
              </Box>
            </Box>   
        </Box>
        <Grid container key={id}>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Box sx={{}}>
              <img src={productDetail?.image} alt="Product" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "20px 0",
                }}
              >
                <Button variant="contained"> {`<<`} </Button>
                <Button variant="contained"> {`>> `}</Button>
              </Box>
            </Box>
          </Grid>
          </Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
        <Grid container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h2">{productDetail?.title}</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography>Category: {productDetail?.category} </Typography>
              <Typography>Price: $ {productDetail?.price}</Typography>
              <Typography>Rating: {productDetail?.rating}</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="p">
                Description: {productDetail?.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Productdetails;
