import React, { useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState('');
  //field for exercise state that will be displayed when user is searching
  //const [exercises, setExercises] = useState([]); <-- moved to home page
  ///for useEffect
  const [bodyParts, setBodyParts] = useState([]);

  // useEffect to fetch the categories as soon as the website loads/renders
  // calling it only at the start means dependency array will be empty
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
// spreading all the bodyPartsData we have
      setBodyParts(['all', ...bodyPartsData]);
    };
// calling/aka loading the data as soon as the website loads
    fetchExercisesData();
  }, []);

  
  const handleSearch = async () => {
    if (search) {
      //first parameter is actual url from code snippets in RapidAPI
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
// we are filtering through the exercise items
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
               || exercise.target.toLowerCase().includes(search)
               || exercise.equipment.toLowerCase().includes(search)
               || exercise.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <motion.div
    variants={fadeIn("", "", 0.1, 1)}
     >
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      
      <Typography fontWeight={700}  mb="49px" textAlign="center"
      sx={{ fontSize: { lg: '40px', xs: '30px' } }}
      >
       Exercises To Help You Move It!
      </Typography>
      
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ 
            input: { fontWeight: '700', border: 'none', 
              borderRadius: '4px' }, 
            width: { lg: '800px', xs: '350px' }, 
            backgroundColor: '#fff', borderRadius: '40px' 
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}  //<-- making there's no changes in terms of casing when searching
          placeholder="Search Exercises"
          type="text"
        />

        <Button 
        className="search-btn" 
        sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', 
        width: { lg: '173px', xs: '80px' }, 
        height: '56px', position: 'absolute', right: '0px', 
        fontSize: { lg: '20px', xs: '14px' } }} 
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar 
         data={bodyParts} 
         bodyParts 
         setBodyPart={setBodyPart} //<--selected body part
         bodyPart={bodyPart} //<-- selected body part, the one we click
         />
      </Box>

    </Stack>

  </motion.div> 
    
  )
}

export default SearchExercises