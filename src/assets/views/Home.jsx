import React from 'react'
import Typography from '@mui/material/Typography';
import CakeIcon from '@mui/icons-material/Cake';

const Home = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Bienvenido a Happy Cake <CakeIcon fontSize='large' />
      </Typography>
      <Typography variant="h6" gutterBottom>
        El lugar de los pasteles felices
      </Typography>
    </>
  )
}

export default Home