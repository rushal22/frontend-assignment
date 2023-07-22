"use client"
import { Box , Container , Typography , IconButton } from "@mui/material"
import InstaIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';




const Footer = () => {

    return (
        <>
          <Box
      component="footer"
      sx={{
        py: 3,
        px: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
      <Typography textAlign="center" variant="h5" color={"white"}>
             Connect With Support
            </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box mr={4}>
            <IconButton size="large" style={{color: "red"}} aria-label="GitHub" href="https://www.instagram.com/rushal_numbey/">
              <InstaIcon style={{ fontSize: 39 }}  />
            </IconButton>
          </Box>
          <Box mr={4}>
            <IconButton size="large" color="primary" aria-label="Facebook" href="https://www.facebook.com/numbeygod">
              <FacebookIcon style={{ fontSize: 39 }} />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body1" color="white" align="center">
          {'Copyright © All rights reserved '}
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
        </>
    )
}
export default Footer