import React from 'react'

import HorizontalScrollbar from './HorizontalScrollbar'

import { Box, Typography,Stack } from '@mui/material'
import Loader from './Loader'


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  
  console.log(targetMuscleExercises.length);
  return (
    <Box  sx={{mt :{lg:'100px' ,xs:'0'   }}}>
    <Typography variant='h3'>
        Exercises that target the same muscle group
    </Typography>
    <Stack direction="row" sx={{p:'2', position :'relative'}}  >
     {targetMuscleExercises.length ? <HorizontalScrollbar 
      data={targetMuscleExercises}
     />  : <Loader/> }


    </Stack>

    </Box>
  )
}

export default SimilarExercises