import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/icons/weight-plate.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack 
     gap="40px" 
     flexWrap="wrap" 
     px="40px" 
     pt="24px"
    sx={{ alignItems: 'center' }} 
    >
      <img src={Logo} alt="logo" />
    </Stack>

    <Typography 
     variant="h5" 
     mt="41px" 
     textAlign="center" 
     pb="40px"
    sx={{ fontSize: { lg: '28px', xs: '20px' } }} 
    >
      Keep your squats low and your standars high ❤️ !
    </Typography>
  </Box>
);

export default Footer;