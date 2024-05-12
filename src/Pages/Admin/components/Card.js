import { Box, Typography } from '@mui/material'
import React from 'react'

const Card = ({data}) => {
  return (
    <Box>
       <Box>
         <Box>
            <Typography>45,643</Typography>
            <img src='' alt='logo'/>
         </Box>
            <Typography>Leads</Typography>
       </Box>
       <Box>
         <Typography>{"37.75%"} since last year</Typography>

       </Box>
    </Box>
  )
}

export default Card
