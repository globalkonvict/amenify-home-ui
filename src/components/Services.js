import React from 'react';
import { Typography, Box, Card } from '@mui/material';

import cleaning from '../assets/Cleaning.png';
import chores from '../assets/Chores.png';
import foodDelivery from '../assets/food-delivery.png';

export default function Services() {
  return (
    <Box className='flex-start'>
      <Typography className='service-title' variant='h5' align='left'>
        Browse your services
      </Typography>
      <Box className='service-container'>
        <ServiceCards title='Cleaning' subtitle='Starting at $75' img={cleaning} />
        <ServiceCards title='Chores' subtitle='Starting at $5' img={chores} />
        <ServiceCards title='Food Delivery' subtitle='Starting at $5' img={foodDelivery} />
      </Box>
    </Box>
  );
}

const ServiceCards = ({ title, subtitle, img }) => {
  return (
    <Box className='service-card-container'>
      <Card className='service-card' elevation={0}>
        <img src={img} alt='service' />
      </Card>
      <Typography className='service-title' variant='h6' align='left'>
        {title}
      </Typography>
      <Typography className='service-subtitle' variant='subtitle1' align='left'>
        {subtitle}
      </Typography>
    </Box>
  );
};
