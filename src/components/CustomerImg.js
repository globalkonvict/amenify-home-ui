import React from 'react';
import { Typography, Box, Button } from '@mui/material';

import sippingFromCup from '../assets/sipping coffee.png';

export default function CustomerImg() {
  return (
    <Box className='customer-image-card-container'>
      <img src={sippingFromCup} alt='customer' className='customer-image' />
      <Box className='customer-image-text-container'>
        <Typography className='customer-image-text-title' variant='h4' align='center'>
          A clean and happy home.
        </Typography>
        <Typography className='customer-image-text-subtitle' variant='h6' align='center'>
          Enjoy special pricing when you leave the cleaning to our local community pros.
        </Typography>
        <Button className='customer-image-button' variant='outlined' disableElevation>
          <Typography className='customer-image-button-text' variant='subtitle1' align='center'>
            See Cleaning
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
