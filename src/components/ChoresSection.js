import React from 'react';
import { Typography, Box, Button } from '@mui/material';

import broom from '../assets/broom.png';

export default function ChoresSection() {
  return (
    <Box className='chores-card-container'>
      <img src={broom} alt='customer' className='broom-image' />
      <Box className='chores-mage-text-container'>
        <Typography className='chores-text-title' variant='h4' align='center'>
          We leave a little sparkle.
        </Typography>
        <Typography className='chores-text-subtitle' variant='h5' align='center'>
          Members enjoy special pricing so leave the chores to us.
        </Typography>
        <Button className='chores-button' variant='outlined' disableElevation>
          <Typography className='chores-button-text' variant='subtitle1' align='center'>
            See Chores
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
