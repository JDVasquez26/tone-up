/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import { routine } from "../routineData";

import HorizontalScrollbar from "../components/HorizontalScrollbar";

// import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';

const WeeklyRoutine = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    // function that makes all API calls for our details
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, []);

  console.log(exercises);

  if (!routine.length) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
        
        {exercises.map((exercise) => {
            return (
                <>
                {routine.length ?
                    routine.map((item) => {
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
                                        <HorizontalScrollbar data={routine} />
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
        })}
      </Box>
    </Box>
  );
};

export default WeeklyRoutine;
