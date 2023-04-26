import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/hand-holding-dumbbell.png';
import TargetImage from '../assets/icons/hand-holding-dumbbell.png';
import EquipmentImage from '../assets/icons/hand-holding-dumbbell.png';

const Detail = ({ exerciseDetail }) => {
  //object destructuring; this is what our exercise Detail contains, we can reference by name now
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  //detail array to show undernearth the description; using the details that are being fetched
  // from api
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" 
    sx={{ flexDirection: { lg: 'row' }, 
      p: '20px', 
      alignItems: 'center' 
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

        <Typography 
          fontWeight={700} 
          textTransform="capitalize"
          sx={{ fontSize: { lg: '64px', xs: '30px' } }} 
        >
          {name}
        </Typography>

        <Typography 
         color="#4F4C4C"
         sx={{ 
          fontSize: { lg: '24px', xs: '18px' } 
          }} 
          >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best exercises to target your {target}. It will help you improve your{' '}
          mood and gain energy.
        </Typography>

        {/* Looping through extra detail */}
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button 
             sx={{ background: '#43DDE6', borderRadius: '50%', width: '100px', height: '100px' }}
            >
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>

            <Typography variant='h5' textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;