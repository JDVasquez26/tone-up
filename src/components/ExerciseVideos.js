import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  //returns this when there's a mistake in search query..
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '10px', xs: '20px' } }} p="20px">

      <Typography 
      fontWeight={700} 
      color="#000" 
      mb="33px"
      sx={{ fontSize: { lg: '44px', xs: '25px' }
       }} 
      >
        Watch {' '}  
        <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
          {name} </span> exercise videos
      </Typography>

      {/* LOOPING THROUGH OUR VIDEOS */}
      <Stack 
        justifyContent="flex-start" 
        flexWrap="wrap"
        alignItems="center" 
        sx={{ 
          flexDirection: { lg: 'row' }, 
          gap: { lg: '110px', xs: '0px' } }} 
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`} //<--how link is set up
            target="_blank" //<-- opens the link in new tab
            rel="noreferrer" //<-- recommended when using _blank
          >
            {/* data coming from rapid api when it comes the src */}
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '20px', xs: '15px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;