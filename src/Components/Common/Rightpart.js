import { Box, Typography } from '@mui/material'
import React from 'react'

const Rightpart = ({text}) => {
    const right ={
        border:"1px solid black", borderRadius:"5px",padding:'1px'
    }
  return (
    <Box sx={right }>
       <Typography>{text}</Typography>
    </Box>
  )
}

export default Rightpart
