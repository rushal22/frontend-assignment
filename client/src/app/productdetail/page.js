"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  CardMedia,
  Card,
  Rating,
} from "@mui/material";
import Navbar from "../layout/Navbar";
import Image from "next/image";

const Productdetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("productId");
  const [productDetail, setProductDetail] = useState(null);
  const [submitMsg, setSubmitMsg] = useState({});
  const [submitMsgStyle, setSubmitMsgStyle] = useState({
    display: "none",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        console.log(data);
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);
  return (
    <>
      <Navbar />

      {productDetail && (
        <>
          <Box sx={{ display: "flex", width: "100%", bgcolor: "white" }}>
            <Grid container spacing={2}>
            <Grid item xs = {12} sm = {12} md = {6} lg = {6} >
              <Box
                sx={{
                  height: "91vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#DADDE1",
                }}
              >
                <Box
                  sx={{ height: "600px", width: "400px", position: "relative" }}
                >
                  <Image
                    src={productDetail?.image}
                    alt={productDetail?.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs = {12} sm = {12} md = {6} lg = {6}>
            <Box
              sx={{
                height: "91vh",
                backgroundColor: "white",
                padding: "48px 0px 0px 56px",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "24px" }}
                  color={"#BBBABB"}
                >
                  {productDetail?.category}
                </Typography>
              </Box>
              <Box sx={{ padding: "32px 0px" }}>
                <Typography
                  style={{ fontWeight: "bold", fontSize: "24px" }}
                  color={"black"}
                >
                  {productDetail?.title}
                </Typography>
              </Box>
              <Box sx={{ width: "80%" }}>
                <Typography sx={{ color: "#505051", fontSize: "20px" }}>
                  {productDetail?.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  color: "#666766",
                  display: "flex",
                  gap: 3,
                  padding: "32px 0px",
                }}
              >
                <Rating
                  name="half-rating"
                  readOnly
                  defaultValue={productDetail?.rating?.rate}
                  precision={0.5}
                />
                <Typography>
                  {productDetail?.rating?.rate} ({productDetail?.rating?.count}{" "}
                  reviews)
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#F57220", fontWeight: "bold" }}>
                  Price: $ {productDetail?.price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  flexWrap: "wrap",
                  gap: 3,
                  padding: "40px 0px 0px 0px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() =>
                    alert(`${productDetail?.title} added to cart successfully`)
                  }
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  onClick={() => alert(`redirecting to checkout`)}
                  color="success"
                >
                  Buy now
                </Button>
              </Box>
            </Box>
            </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};
export default Productdetails;
