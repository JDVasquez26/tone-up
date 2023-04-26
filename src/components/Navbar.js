import React from 'react';

import { Link } from 'react-router-dom';

//  https://mui.com/material-ui/react-stack/
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      // SX(EXTRASTYLYING) 
      // for smaller devices (small(sm) and xsmall(sx))
      //  mt(changing margin top for small and xmall devices)
      sx={{ 
        gap: {sm: '122px', xs: '10px'}, 
        mt: {sm:'32px', xs:'20px'},
        justifyContent:'none',  // <-- to keep everything at the start
      }}
      px ='20px'  //<--padding x-axis
    >
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{ margin: '0 20px', width: '90px', height: '90px' }}
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        sx={{ fontSize: { lg: '24px', xs: '15px' } }} 
        // fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/"
          style={{textDecoration:'none', color:'#3A1212', borderBottom:'3px solid #FF2625'}}
        >
          Home
        </Link>
  
        <a 
        href="#exercises" 
        style={{textDecoration:'none', color:'#3A1212'}}
        >Exercises
        </a>

        <Link to="/weekly-routine"
          style={{textDecoration:'none', color:'#3A1212'}}
        >
          Jest's Routine
        </Link>

       

      </Stack>

    </Stack>
  )
}

export default Navbar