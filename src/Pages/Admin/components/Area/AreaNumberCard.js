import { Box, Typography } from '@mui/material'
import React from 'react'
import FirstSmallPart from './FirstSmallPart'

const AreaNumberCard = () => {
  const first ={
    name:"Rajouri Garden", total:"1,700", textColor:'#79D0CA',
  }
  const second ={
    name:"Tilak Nagar", total:"1,100", textColor:'#79D0CA',
  }
  const three ={
    name:"Rohini", total:"1,050", textColor:'#79D0CA',
  }
  return (
    <Box border={'1px solid black'} padding={'10px'} borderRadius={'5px'}>
       <Typography>Areas</Typography>
       <FirstSmallPart name={first.name} total={first.total} textColor={first.textColor}/>
       <FirstSmallPart name={second.name} total={second.total} textColor={second.textColor}/>
       <FirstSmallPart name={three.name} total={three.total} textColor={three.textColor}/>
    </Box>
  )
}

export default AreaNumberCard
