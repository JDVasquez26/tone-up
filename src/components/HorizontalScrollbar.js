//rendering in searchExercises
import React, { useContext } from 'react';
//this is a react package to be used to scroll through calds
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

//LeftArrow
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

//RightArrow
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

//USED FOR THE BODY PARTS CARDS & EXERCISE CARDS
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? //<-- if it's  bodyParts
        <BodyPart //bodyPart cards..
          item={item} // <-- 
          setBodyPart={setBodyPart} 
          bodyPart={bodyPart} 
        /> 
        : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;