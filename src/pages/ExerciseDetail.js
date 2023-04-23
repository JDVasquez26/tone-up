import React, { useEffect, useState } from 'react';
// Remember: this determines the id of which exercise we are on
import { useParams } from 'react-router-dom';
//MUI
import { Box } from '@mui/material';
//Utility functions from fetchData func
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  //states for each individual exercises, states will be populated by API depending on the id of exercise
  const { id } = useParams(); //<-- number from the url, important for our useEffect to be used to fetch and render the details 
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  
//USEEFFECT TO POPULATE OUR STATES; RE-Renders page WHENEVER THE ID Of exercises CHANGES,
// we can make sure of this by putting the id in the dependecies array at the second params
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // function that makes all API calls for our details
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'; //<--api for details, from RapidAPI
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'; //<--api for videos, from RapidAPI
// Rembmer fetchData function takes two things, url and exerciseOptions(which is the get options for each exercise that we are getting using our key)
// Remember these urls are specific the endpoints in RapidAPI, 
      //GET Exercise by ID endpoint
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData); //<-- setting it so that we can pass it to the detail component

      //Get Search Videos/channels/playlists API endpoint - videos about specific exercise name
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      //the videos are inside the contents object from the data we get back from the api
      setExerciseVideos(exerciseVideosData.contents);
      //Get list of exercises by target muscle endpoint
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      //Get list of exercises by Equipment muscle endpoint
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>

      <Detail 
      exerciseDetail={exerciseDetail} 
      />

      <ExerciseVideos 
       exerciseVideos={exerciseVideos} 
       name={exerciseDetail.name} 
       />

      <SimilarExercises 
        targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises={equipmentExercises} 
        />

    </Box>
  );
};

export default ExerciseDetail;