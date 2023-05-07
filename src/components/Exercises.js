import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  console.log("exercises: ", exercises)
  // UseEffect for any time to bodyPart changes..
  // Important for when clicking the body part categories in searchExcises components
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        //this is based on the caterogy for body part
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };
//must be called in order for the function to work and change the execisesData
    fetchExercisesData();
  }, [bodyPart]);


  // Pagination For showing Exercises////////////////////////
    //Pagination States/////////
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);
      //variables for the pagination component to work
  const indexOfLastExercise = currentPage * exercisesPerPage;  
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' }); //<-- scroll to the top of the exercises page
  };
/////////////////////////////////////




  if (!currentExercises.length) return <Loader />;

  return (
    <Box 
      id="exercises" // <-- for the scrolling
      mt="50px" 
      p="20px"
      sx={{ 
        mt: { lg: '110px' } 
        }} 
    >

      <Typography 
        variant="h4" 
        fontWeight="bold"  
        mb="46px"
        sx={{ fontSize: 
          { lg: '44px', xs: '30px' } 
        }}
      >
        Showing Results
      </Typography>

      <Stack 
        direction="row" 
        flexWrap="wrap" 
        justifyContent="center"
        sx={{ 
          gap: { lg: '107px', xs: '50px' } 
        }} 
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>

{/* This stack takes care of PAGINATION */}
      <Stack alignItems="center"
      sx={{ mt: { lg: '110px', xs: '50px' } 
      }} 
      >
        {exercises.length > 9 && (
          <Pagination // <-- pagination component coming from MUI; properties for this component in docs
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage} //<-- must create this as a state for pagination
            onChange={paginate}  //<-- function for the pagination
            size="large"
          />
        )}
      </Stack>
      
    </Box>
  );
};

export default Exercises;