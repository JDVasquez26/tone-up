import React from 'react';
//use to route between homepage and our exercise details page
import { Route, Routes } from 'react-router';

import { Box } from '@mui/material';

import './App.css'

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WeeklyRoutine from './components/WeeklyRoutine';

const App = () => {
  return (
    // making sure website is responsive in lx devices and the margin is auto for box components from MUI, 
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/weekly-routine" element={<WeeklyRoutine />} />
    </Routes>
    <Footer />
  </Box>
  )
}

export default App