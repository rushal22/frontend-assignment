"use client";
import React from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import Navbar from "../layout/Navbar";

const Search = () => {
  const [search , setSearch] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setSearch(data.get('search'))
  }
  return (
    <>  
      <div><Navbar/></div>
      <Container sx={{ maxWidth: "100%" }}>
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              inputProps={{
                style: {
                  color: 'white'
                }
              }}
              margin="normal"
              required
              fullWidth
              id="search"
              label="Search Products"
              name="search"
              autoComplete="search"
              autoFocus
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
        </Box>
        {/* <Box>{products && <Products products={products} />}</Box> */}
      </Container>
    </>
  );
};
export default Search;
