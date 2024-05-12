import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Card = ({data}) => {
  return (
    <Box sx={{border:'1px solid black',borderRadius:'5px',padding:"15px"}}>
       <Box>
         <Box display='flex' justifyContent='space-between'>
            <Typography>{data.total}</Typography>
            <img src='' alt='logo'/>
         </Box>
            <Typography sx={{display:'flex', alignSelf:'start'}}>{data.type}</Typography>
       </Box>
       <Box display={'flex'}>
          {data.profit && <ArrowUpwardIcon sx={{color: data.profit ? "green" :'red'}}/>}
          {!data.profit &&  <ArrowDownwardIcon sx={{color: data.profit ? "green" :'red'}}/>}
         <Typography> <span style={{color: data.profit ? "green" :'red'}}>{`${data.percent}%`}</span>  since last year</Typography>
       </Box>
    </Box>
  )
}

export default Card
