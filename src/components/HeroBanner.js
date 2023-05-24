import React from 'react';

import { motion } from "framer-motion";
import { textVariant, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import { Box, Typography, Button } from '@mui/material';

import Image from "../assets/images/fitness-apps.png"
// import Heart from "../assets/icons/heart.gif"
// import Stretching from"../assets/icons/stretching.gif"
// import HomeStretch from "../assets/icons/homestretch.gif"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        // margin top on large devices
        mt: { lg:'100px', sx: '70px'},
        //on small devices margin left
        ml: { sm:'50px'}
      }} 
      position="relative"
      p='20px'  // <-- padding
      // border={'solid 1px black'}
      // variants={fadeIn("", "", 0.1, 1)}
    >

{/* --------------slideIn Left------------------------- */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} 
      >
        <Typography
        color='#43DDE6'
        fontWeight="600"
        fontSize="26px"
        >
            Fitness Made Easy
        </Typography>
        
        <Typography
        fontWeight="700"
        mb='20px'
        mt='30px'
        sx={{
          fontSize: {lg: '44px', xs: '40px'}
        }}
        >
            Workout because you love your body,<br />  not because you hate it.
        </Typography>

        <Typography
          fontSize= "22px"
          lineheight="35px"
          fontFamily="Alegreya"
        >
            Check out some exercises that will make you stronger!
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
      {/* </motion.div>   */}
{/* -------SlideIn Right----- */}
      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
      > */}
        <img 
        src={Image} 
        alt='banner'
        className='hero-banner-img'
       />

      </motion.div>
       
    </Box>
  )
}

export default SectionWrapper(HeroBanner, "");