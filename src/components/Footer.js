import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box className='footer-text'>
      <Typography variant='h4' align='center'>
        Cleaning
      </Typography>
      <Typography variant='h4' align='center'>
        Chores
      </Typography>
      <Typography variant='h4' align='center'>
        Food Delivery
      </Typography>
    </Box>
  );
}
