import React from 'react'
// it is a built-in react object that is used to contain data abt component;
// a component state can change over time;whenever it changes the component re-renders;
import { useState } from 'react'
import { Box } from '@mui/system'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises , setExercises]=useState([]);
  return (
     <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises  setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
     </Box>
  )
}

export default Home


