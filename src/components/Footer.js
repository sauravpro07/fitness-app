import React from 'react'
import { Box,Stack,Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#fff3f4">
     <Stack gap="40px " alignItems="center" px="40px" pt="24px">
      <Typography variant='h5'  mt="20px" mb="20px" pb="20px" justifyContent="center" alignItems="center">
        Made by Saurav Verma. 
           {'  '}copyright reserved.
      </Typography>
   

     </Stack>

    </Box>
  )
}

export default Footer

