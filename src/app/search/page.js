"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../layout/Navbar";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import SearchIcon from "@mui/icons-material/ImageSearchSharp"
import Typewriter from "typewriter-effect";



const Search = () => {
  const [search, setSearch] = useState();
  const [products, setProducts] = useState(null);
  const { data, isLoading, isFetched, isError } = useQuery(
    ["search", Search],
    async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      let products = (await res.json()) || [];
      return products;
    }
  );

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!isLoading && isFetched && data) {
      const searchRes = data.filter((prod) => {
        const title = prod.title.toLowerCase();
        const category = prod.category.toLowerCase();
        return (
          title.includes(search.toLowerCase()) ||
          category.includes(search.toLowerCase())
        );
      });
      setProducts(searchRes);
    } else if (!isLoading && isError) {
      setProducts(null);
    }
  };
  return (
    <>
      <Navbar />
      <Box height={"100vh"}  bgcolor={"white"}>
      <Grid width={"100%"}  bgcolor={"white"}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography fontFamily={"fantasy"}
          color={"ThreeDLightShadow"} textAlign={"center"} py={5} variant="h4">
            <Box padding={"50px"}>
      <Typewriter
         options={{
          strings: ['Get Your Product', 'Here!☺'],
          autoStart: true,
          loop: true,  
        }}
        
      />
    </Box>
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: -1  }}
            onSubmit={handleSearch}
          >
            <TextField
              inputProps={{
                style: {
                  color: "black",
                },
              }}
              margin="normal"
              color="success"
              required
              fullWidth
              id="search"
              label="Search Products"
              name="search"
              autoComplete="search"
              autoFocus
              value={search}
              onInput={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              style={{fontSize:"20px" , width: "150px"}}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Box>
          <Box
            sx={{
              paddingBottom:"30px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {products && products.length
              ? products.map((product) => (
                  <ProductCard key={product?.id} product={product} />
                ))
              : null}
          </Box>
        </Box>
      </Grid>
      </Box>
    </>
  );
};
export default Search;
