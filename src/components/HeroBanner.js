import React from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';


import Image from "../assets/images/fitness-apps.png"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        // margin top on large devices
        mt: { lg:'212px', sx: '70px'},
        //on small devices margin left
        ml: { sm:'50px'}
      }} 
      position="relative"
      p='20px'  // <-- padding
    >
        <Typography
        color='#43DDE6'
        fontWeight="600"
        fontSize="26px"
        >
            Fitness Club
        </Typography>
        
        <Typography
        fontWeight="700"
        mb='20px'
        mt='30px'
        sx={{
          fontSize: {lg: '44px', xs: '40px'}
        }}
        >
            Sweat, Smile <br /> and Repeat
        </Typography>

        <Typography
          fontSize= "22px"
          lineheight="35px"
          fontFamily="Alegreya"
        >
            Check out the most effective exercises
        </Typography>

        <Button
         variant='contained'
         color='error'
         href='#exercises'
         sx={{
            padding: "10px"
          }}
        >
          Expore Exercises
        </Button>

        <Typography
        fontWeight="600"
        color='#43DDE6'
        fontSize='190px'
        sx={{
            opacity: 0.1,
            display:{ lg: 'block', sm: 'block', xs:'none'}
        }}
        >
            Exercise
        </Typography>

        <img 
        src={Image} 
        alt='banner'
        className='hero-banner-img'
       />
    </Box>
  )
}

export default HeroBanner