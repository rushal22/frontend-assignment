"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  Card,
  Rating,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <>
      {product && (
        <Grid item key={product.id * 10}>
          <Card
            title={product?.category}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              width: "300px",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => router.push(`/productdetail`)}
          >
            <CardMedia
              component="img"
              image={product?.image}
              alt={product?.title}
              height={200}
              sx={{
                padding: "5px", 
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6">
                {product?.title}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                display={"flex"}
                justifyContent={"center"}
              >
                {product?.category}
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                paddingTop={"20px"}
              >
                <Typography variant="h5" color={"orange"}>
                  Rs. {product?.price}
                </Typography>
                <Typography variant="h7" display={"flex"} alignItems={"center"}>
                  <Rating
                    name="half-rating"
                    defaultValue={product?.rating?.rate}
                    precision={0.5}
                  />
                  ({product?.rating?.count})
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ProductCard;
