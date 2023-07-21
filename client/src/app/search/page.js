"use client";
import React from "react";
import {
  Container,
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
      <Grid width={"80%"} margin={"auto"}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Search products
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSearch}
          >
            <TextField
              inputProps={{
                style: {
                  color: "white",
                },
              }}
              margin="normal"
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
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
          <Box
            sx={{
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
    </>
  );
};
export default Search;
