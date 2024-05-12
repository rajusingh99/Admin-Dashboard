import { Box, Typography } from '@mui/material'
import React from 'react'

const SmallPart = ({name,total,textColor}) => {
    const style ={
        display:'flex', flexDirection:'column', justifyContent:'space-between',
    }
  return (
    <Box  sx={style}>
       <Typography>{name}</Typography>
       <Typography sx={{color:textColor}}>{total}</Typography>
    </Box>
  )
}

export default SmallPart
