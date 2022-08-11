import React from 'react';
import { Typography, Box, Card, Icon } from '@mui/material';
import sprayCleaning from '../assets/spray cleaning.png';

export default function ReviewCard() {
  return (
    <Card className='review-card'>
      <img className='review-card-image' src={sprayCleaning} alt='spray cleaning' />
      <Box className='review-stars-container'>
        {[...Array(5).fill(0)].map((_, i) => {
          return (
            <Icon className='review-star' fontSize='large' sx={{ color: '#A8D1D0' }}>
              star
            </Icon>
          );
        })}
        <Typography className='review-title' variant='h5' align='center'>
          3,000+ five-star resident reviews
        </Typography>
        <Typography className='review-subtitle' variant='h6' align='center'>
          “This saves me hundreds each month, easily. It’s the best amenity I’ve ever had.”
        </Typography>
        <Typography className='review-subtitle' variant='h6' align='center'>
          - Annie P., Seattle
        </Typography>
      </Box>
    </Card>
  );
}
