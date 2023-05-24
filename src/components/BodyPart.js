import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/hand-holding-dumbbell.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button" // <-- because we can click on it =, set the type to button
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{ //styles to make it look like propper cards
      //styles for the card that is selected to have a border top on it, 
        borderTop: bodyPart === item ?  '4px solid #43DDE6' : '',
        backgroundColor: '#fff', 
        borderBottomLeftRadius: '20px', 
        boxShadow: bodyPart === item ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px": "",
        width: '270px', 
        height: '300px', 
        cursor: 'pointer', 
        gap: '47px' }}
        onClick={() => {
      setBodyPart(item);
      //scrolling down to the excercises/aka the items
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '90px', height: '90px' }} />
    <Typography 
    fontSize="24px" 
    fontWeight="bold" 
    fontFamily="Alegreya" 
    color="#3A1212" 
    textTransform="capitalize"
    > 
    {item}
    </Typography>
  </Stack>
);

export default BodyPart;