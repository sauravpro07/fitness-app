import React  , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { exerciseOptions ,youtubeOptions , fetchData} from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/similarExercises'

const ExerciseDetail = () => {

   const [exerciseDetail,setExerciseDetail]=useState({});
   const [exerciseVideos,setexerciseVideos]=useState([]);
   const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
   const [equipmentExercises,setEquipmentExercises]=useState([]);


  // this will give accss to id , where we r in a browser
   const {id}=useParams();
   
   useEffect(() => {
    const fetchExercisesData=async()=>{
      const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com';
      const youtubeUrl='https://youtube-search-and-download.p.rapidapi.com';
    
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData=await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setexerciseVideos(exerciseVideoData.contents);
      console.log(exerciseDetailData);
      
      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target
      /${exerciseDetailData.target}`, exerciseOptions);
       
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment
      /${exerciseDetailData.equipment}`, exerciseOptions);

     setEquipmentExercises(equipmentExercisesData);

    }
    fetchExercisesData();
    
   }, [id])
   
  



  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
     

      
    </Box>
  )
}

export default ExerciseDetail