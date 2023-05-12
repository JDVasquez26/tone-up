import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import Tilt from 'react-parallax-tilt';

const ExerciseCard = ({ exercise }) => (
  <Tilt
  className="parallax-effect-glare-scale"
  perspective={500}
  glareEnable={true}
  glareMaxOpacity={0.45}
  // scale={1.02}
  gyroscope={true}
>
    <Link 
    className="exercise-card" 
    to={`/exercise/${exercise.id}`}
    >
    {/* Gifs */}
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" /> 

      {/* Stack with buttons..that are not clickable, but what is working out during the exercise */}
      <Stack direction="row">
        {/* Body part that is working out */}
        <Button 
        sx={{ ml: '21px', color: '#fff', background: '#43DDE6', fontSize: '14px', 
              borderRadius: '20px', textTransform: 'capitalize' 
            }}
        >
          {exercise.bodyPart}
        </Button>
        {/* Target muscle that is being worked out */}
        <Button sx={{ ml: '21px', color: '#fff', background: '#1A69C1', 
          fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' 
        }}
        >
          {exercise.target}
        </Button>

      </Stack>

      {/* Exercise Name */}
      <Typography 
        ml="21px" 
        color="#000" 
        fontWeight="bold" 
        mt="11px" 
        pb="10px" 
        textTransform="capitalize"
        sx={{ fontSize: { lg: '22px', xs: '20px' } }} 
        >
        {exercise.name}
      </Typography>

    </Link>
  </Tilt>
);

export default ExerciseCard;