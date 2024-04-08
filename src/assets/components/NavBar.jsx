// import React from 'react'
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material/';
import CakeIcon from '@mui/icons-material/Cake';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CakeIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Happy Cake
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar