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
import Link from "next/link";
const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <>
      {product && (
        <Grid item key={product.id * 10}>
           <Link
                href={{ pathname: "/productdetail", query: { productId: product.id } }}
              >
          <Card
            title={product?.category}
            
            sx={{
              height: "96%",
              display: "flex",
              flexDirection: "column",
              width: "290px",
              padding: "10px",
              cursor: "pointer",
              bgcolor: "lavenderblush"
            }}
          >
            <CardMedia
              component="img"
              image={product?.image}
              alt={product?.title}
              height={300}
              sx={{
                padding: "10px", 
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{height:"70px" , width: "100%" , display:"flex" , flexWrap: "wrap" , overflow: "hidden"}} aria-level={product?.title}>
              <Typography gutterBottom variant="h6">
                {product?.title}
              </Typography>
              </Box>
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
              >
                <Typography variant="h5" color={"rebeccapurple"}>
                  $ {product?.price}
                </Typography>
                <Typography variant="h6" display={"flex"} alignItems={"center"}>
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
          </Link>
        </Grid>
      )}
    </>
  );
};

export default ProductCard;
