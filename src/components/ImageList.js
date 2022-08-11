import React from 'react';
import { Typography, Box, Button } from '@mui/material';

import img1 from '../assets/Cheddar Hash Brown Casserole.png';
import img2 from '../assets/Quiche Lorraine.png';
import img3 from '../assets/Lemony Brussel Sprout Salad.png';

export default function ImageList() {
  return (
    <>
      <Box className='image-list-container'>
        <img src={img1} alt='img1' className='image-1' />
        <img src={img2} alt='img2' className='image-2' />
        <img src={img3} alt='img3' className='image-3' />
      </Box>
      <Box className='image-list-text-container'>
        <Typography className='image-list-text-title' variant='h5' align='left'>
          Take N Bake
        </Typography>
        <Typography className='image-list-text-subtitle' variant='h6' align='left'>
          Hosting a get-together? We got you. Check out our chef-prepared family-style meals.
        </Typography>
        <Button className='image-list-button' variant='outlined' disableElevation>
          <Typography className='image-list-button-text' variant='subtitle1' align='center'>
            See the menu
          </Typography>
        </Button>
      </Box>
    </>
  );
}
