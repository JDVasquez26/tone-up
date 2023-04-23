import React, {useState} from 'react';

import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  // changes to these two states will be happening all 
  // accross the application, not just on the search exercises component
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
//We can use the react context api to handle all the props as well

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart} 
      />
      <Exercises 
      setExercises={setExercises} 
      exercises={exercises} 
      bodyPart={bodyPart} />
    </Box>
  )
}

export default Home