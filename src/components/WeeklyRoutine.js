/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import { sunday, monday, tuesday, wednesday, thursday, friday, saturday } from "../routineData";


import HorizontalScrollbar from "./HorizontalScrollbar";

// import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const WeeklyRoutine = () => {
  const [exercises, setExercises] = useState([]);

  // useEffect(() => {
  //   // window.scrollTo({ top: 0, behavior: 'smooth' });
  //   // function that makes all API calls for our details
  //   const fetchExercisesData = async () => {
  //     const exercisesData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises",
  //       exerciseOptions
  //     );
  //     setExercises(exercisesData);
  //   };
  //   fetchExercisesData();
  // }, []);

//   console.log(exercises);

//   if (!routine.length) return <div>No Data</div>;

  return (
    <Box id="weeklyroutine" sx={{ mt: { lg: "96px", xs: "60px" } }}>

      <Typography 
        variant="h4" 
        fontWeight="bold"
        align="center"  
        mb="46px"
        sx={{ fontSize: 
          { lg: '44px', xs: '30px' } 
        }}
      >
        Jesthine's Weekly Routine (Maybe..)
      </Typography>
      <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
        
        {/* SUNDAY*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Sunday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            ABS</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {sunday.length !== 0 ?
        <HorizontalScrollbar data={sunday} /> 
        : <Loader />}
        </Stack>

        {/* MONDAY*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Monday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            QUADS</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {monday.length !== 0 ?
        <HorizontalScrollbar data={monday} /> 
        : <Loader />}
        </Stack>


        {/* Tuesday*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Tuesday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            GLUTES</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {tuesday.length !== 0 ?
        <HorizontalScrollbar data={tuesday} /> 
        : <Loader />}
        </Stack>


        {/* WEDNESDAY*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Wednesday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            TRICEPS</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {wednesday.length !== 0 ?
        <HorizontalScrollbar data={wednesday} /> 
        : <Loader />}
        </Stack>

        {/* THURSDAY*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Thursday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            BICEPS</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {thursday.length !== 0 ?
        <HorizontalScrollbar data={thursday} /> 
        : <Loader />}
        </Stack>

        {/* FRIDAY*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Friday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            BACK</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {friday.length !== 0 ?
        <HorizontalScrollbar data={friday} /> 
        : <Loader />}
        </Stack>


        {/* SATURDAY*/}
        <Typography 
        fontWeight={700} 
        color="#000" 
        mb="33px"
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} 
        >
        Saturday's <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
            CHEST</span> workout exercises (10 reps / 3 sets)
        </Typography>

        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {saturday.length !== 0 ?
        <HorizontalScrollbar data={saturday} /> 
        : <Loader />}
        </Stack>

        



        {/* {exercises.map((exercise) => {
            return (
                <>
                {sunday.length ?
                    sunday.map((item) => {
                        return (
                            // Sunday
                            <>
                                {item.day === "Sunday" && exercise.name === item.name ? (
                                    <>
                                        <Typography
                                        fontWeight={700}
                                        color="#000"
                                        mb="33px"
                                        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
                                        >
                                        Monday{" "}
                                        <span
                                            style={{
                                            color: "#FF2625",
                                            textTransform: "capitalize",
                                            }}
                                        >
                                            {item.target}'s
                                        </span>{" "}
                                        exercises
                                        </Typography>

                                        <Stack direction="row" sx={{ p: 2, position: "relative" }}>
                                        <HorizontalScrollbar data={sunday} />
                                        </Stack>
                                    </>
                        ) : (
                        <div>No data</div>
                    )}
                            </>
                        )
                })
                : "No exercises"
                } 
                </>
            )
        })} */}
      </Box>
    </Box>
  );
};

export default WeeklyRoutine;
