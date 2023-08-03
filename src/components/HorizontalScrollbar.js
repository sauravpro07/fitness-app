import React from 'react'
import { Box } from '@mui/material'
import BodyParts from './BodyParts'
import  ExerciseCard from './ExerciseCard'

// for scrolling
import { ScrollMenu } from 'react-horizontal-scrolling-menu'

const HorizontalScrollbar = ({data,setBodyPart,bodyPart, isBodyParts}) => {
  return (
    <ScrollMenu>
      {data.map((item)=>(
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
            >
           {  isBodyParts ? <BodyParts item={item} bodyPart={bodyPart}
             setBodyPart={setBodyPart}
             />
             : <ExerciseCard exercise={item}/>
           }
        </Box>

      ))}

    </ScrollMenu>
  )
}

export default HorizontalScrollbar