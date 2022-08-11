import React from 'react';
import { Typography, Box, Card } from '@mui/material';

export default function WalletBalanceCard() {
  return (
    <Box className='wallet-balance-container'>
      <Card className='wallet-balance-card flex-centered' elevation={0}>
        <Typography className='wallet-balance-title' variant='h6' align='center'>
          Your Amenify Wallet balance:
        </Typography>
        <Typography className='wallet-balance-subtitle' variant='h5' align='center'>
          You have $25 towards your next order!
        </Typography>
      </Card>
      <Typography className='wallet-balance-note' variant='body1' align='center'>
        Your balance will automatically be applied to your next purchase.
      </Typography>
    </Box>
  );
}
