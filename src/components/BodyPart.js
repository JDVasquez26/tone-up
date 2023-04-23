import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/hand-holding-dumbbell.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{ //styles for the card that is selected to have a border top on it, cld b done in a better way
        borderTop: bodyPart === item ?  '4px solid #43DDE6' : '',
        backgroundColor: '#fff', 
        borderBottomLeftRadius: '20px', 
        width: '270px', 
        height: '282px', 
        cursor: 'pointer', 
        gap: '47px' }}
        onClick={() => {
      setBodyPart(item);
      //scrolling down to the excercises/aka the items
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '80px', height: '80px' }} />
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