"use client"
import { Box , Container , Typography , Link, IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
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
        backgroundColor: (theme) =>
          theme.palette.mode ==='dark'
            ? theme.palette.grey[700]
            : theme.palette.grey[500],
      }}
    >
      <Container maxWidth="lg">
      <Typography textAlign="center" variant="h5" color={"black"}>
             Your Complete Web Solutions
            </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box mr={4}>
            <IconButton size="large" color={"black"} aria-label="GitHub" href="https://github.com/rushal22">
              <GitHubIcon style={{ fontSize: 36 }} />
            </IconButton>
          </Box>
          <Box mr={4}>
            <IconButton size="large" color="primary" aria-label="Facebook" href="https://www.facebook.com/numbeygod">
              <FacebookIcon style={{ fontSize: 36 }} />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body1" color="text.secondary" align="center">
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