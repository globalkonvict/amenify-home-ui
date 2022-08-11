import React from 'react';
import { Typography, Box, Button } from '@mui/material';

import treats from '../assets/food on dishes.png';

export default function TreatSection() {
  return (
    <Box className='treats-container'>
      <img className='treats-image' src={treats} alt='treats' />
      <Box className='treats-text-container'>
        <Typography className='treats-text-title' variant='h4' align='center'>
          Treat yourself.
        </Typography>
        <Typography className='treats-text-subtitle' variant='h5' align='center'>
          Chef-prepared delicious meals handcrafted and delivered.
        </Typography>
        <Button className='treats-button' variant='outlined' disableElevation>
          <Typography className='treats-button-text' variant='subtitle1' align='center'>
            See the Lunch menu
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
