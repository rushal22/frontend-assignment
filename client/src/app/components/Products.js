"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
    const router = useRouter()
    const query = useQuery(['products'], async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
      return data
    });
  
    return (
      <>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Grid container spacing={4}>
              {query.data &&
                query.data?.length &&
                query.data.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        onClick={() =>
                          router.push(`/productdetail`)
                        }
                        sx={{
                          // 16:9
                          pt: "56.25%",
                          cursor: "pointer",
                        }}
                        image={product?.image}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography></Typography>
                      </CardContent>
                      <CardActions>
                        <Typography textAlign="left" variant="h5">
                          {product.category}
                        </Typography>
                        <Typography style={{ paddingRight: 20, paddingLeft: 20,  }} textAlign="right" variant="h7">
                          ${product.price}
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </>
    );
  };
  
  export default Products;
