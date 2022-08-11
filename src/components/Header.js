import React from 'react';
import { Typography, Box } from '@mui/material';
import topImage from '../assets/top_image.png';

export default function Header() {
  return (
    <Box className='flex-centered'>
      <img className='header-image' src={topImage} alt='header' />
      <Typography className='header-title' variant='h4'>
        Good morning, Kaylie
      </Typography>
      <Typography className='header-subtitle' variant='subtitle1'>
        What can Gables Columbus Center + Amenify do for you today?
      </Typography>
    </Box>
  );
}
