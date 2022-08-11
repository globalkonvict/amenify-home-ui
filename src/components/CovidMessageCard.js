import React from 'react';
import { Typography, Box, Card } from '@mui/material';

export default function CovidMessageCard() {
  return (
    <Box className='covid-container'>
      <Card className='covid-card flex-centered' elevation={0}>
        <Typography className='covid-title' variant='h5' align='left'>
          We care about your safety.
        </Typography>
        <Typography className='covid-subtitle' variant='h6' align='left'>
          In light of COVID-19, we have updated all onsite protocols to protect your health and safety.
        </Typography>
        <Typography className='covid-note' variant='h6' align='left'>
          Learn more
        </Typography>
      </Card>
    </Box>
  );
}
