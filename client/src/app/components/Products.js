"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";

const Products = () => {
  const router = useRouter();
  const img = true;
  const [store, setStore] = useState();

  useEffect(() => {
    const store = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setStore(data);
    };
    store();
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      ></Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {store &&
            store?.length &&
            store.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    onClick={() => router.push(`/productdetail/${product.id}`)}
                    sx={{
                      // 16:9
                      pt: "56.25%",
                      cursor: "pointer",
                    }}
                    image={product?.image}
                    alt="random"
                  />
                  {/* <img src={image1} />  */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography></Typography>
                  </CardContent>
                  <CardActions>
                    <Typography textAlign="left" variant="h6">
                      Rs.{product.price}
                    </Typography>
                    <Typography textAlign="right" variant="h6">
                      {product.category}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};
export default Products;
