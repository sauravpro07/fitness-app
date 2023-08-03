import React, { useState , useEffect} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'


// we allready have th exerciseoption fun and fetch data funtion

import { exerciseOptions,fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
// we r passing props , which we have used in home.js
const Exercises = ({exercises, setExercises,bodyPart}) => {

   const [currentPage,setcurrentpage]=useState(1);
   const exercisePerPage=9;
   const indexOfLastExercise=currentPage*exercisePerPage;
   const indexOfFirstExercise=indexOfLastExercise-exercisePerPage
  const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise);
   const paginate=(e,value)=>{
    setcurrentpage(value);
    window.scrollTo( {top:1800 , behavior:'smooth'})
   }

   //using useEffect to show effect .when we click on a card
   // like , back , cardio , which is linked to fetchdata and set exercise
    useEffect(() => {
      const fetchExercisesData= async ()=>{

        let exerciseData=[];
        if(bodyPart==='all'){
          exerciseData=await fetchData( 'https://exercisedb.p.rapidapi.com/exercises' , exerciseOptions);
        }
        else{
          exerciseData=await fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseOptions);
        }
      
    setExercises(exerciseData);
      }
    fetchExercisesData();
   
    }, [bodyPart]);
    


  return (
    <Box id="exercises"
    sx={{mt :{lg:'110px'} }}
    mt="50px"
    p="20px"
    
    >

    <Typography variant="h3" mb="46px">
      showing results 
    </Typography>
    <Stack direction="row"
    sx={{gap:{ lg:'110px', xs:'50px'}}}
    flexWrap="wrap" justifyContent="center"
    >
    {
      currentExercises.map((exercise, index)=>(
       <ExerciseCard  key={index} exercise={exercise} />
      ))
    }

    </Stack>
    <Stack mt="100px" alignItems="center" >
   {exercises.length>9 && (
      <Pagination 
      color='standard'
      shape='rounded'
      defaultPage={1}
      count={Math.ceil(exercises.length/9)}
      page={currentPage}
      onChange={paginate}
      size="large"
      />

   )}
     
    </Stack>

    

    </Box>
  )
}

export default Exercises