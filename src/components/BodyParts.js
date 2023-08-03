import React from 'react'
import { Stack } from '@mui/system'
import Icon from '../assets/icons/gym.png'
import { Typography } from '@mui/material'

const BodyPart = ({item ,bodyPart,setBodyPart}) => (
  
    <Stack 
     type="button"
     alignItems="center"
     justifyContent="center"
     className="bodyPart-card"
     
    sx={
        bodyPart === item ?{
            borderTop: '4px solid #ff2625',
            backgroundColor:'#000',
            borderBottomLeftRadius: '20px',
            width:'220px',
            height:'225px',
            cursor:'pointer',
            gap:'47px'


        } : {
            
            backgroundColor:'#000',
            borderBottomLeftRadius: '20px',
            width:"220px",
            height:'225px',
            cursor:'pointer',
            gap:'47px'

        }
    }

   onClick={()=>{
    setBodyPart(item);
    window.scrollTo({top:1800 , left :100 , behavior:'smooth'})

   }}

    >
        <img src={Icon} alt="dumbbell"  style={{width:'40px', height:'40px'}}  />
        <Typography color='white'  
         fontSize="30px" fontWeight="bold" textTransform="capitalize"
         > {item} </Typography>
    </Stack>

  )


export default BodyPart