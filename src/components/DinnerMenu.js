import React from 'react';
import { Typography, Box, Button } from '@mui/material';

import dish from '../assets/dish.png';

export default function DinnerSection() {
  return (
    <Box className='treats-container'>
      <img className='dinner-image' src={dish} alt='dinner' />
      <Box className='treats-text-container'>
        <Typography className='treats-text-title' variant='h4' align='center'>
          Dinner has never been easier.
        </Typography>
        <Typography className='treats-text-subtitle' variant='h5' align='center'>
          Chef-prepared delicious meals handcrafted and delivered.
        </Typography>
        <Button className='treats-button' variant='outlined' disableElevation>
          <Typography className='treats-button-text' variant='subtitle1' align='center'>
            See the Dinner Menu
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
