import { Box } from '@mui/material'
import React from 'react'
import SmallPart from './SmallPart'

const FirstSmallPart = ({name,total,textColor}) => {
  return (
    <Box display={'flex'} >
      <SmallPart name={"Rajouri Garden"} total={"7,000"} textColor={'#79D0CA'}/>
      <SmallPart name={"Patel Nagar"} total={"1,100"} textColor={'#79D0CA'}/>
      <SmallPart name={"Vasant Kunj"} total={"35,00"} textColor={'#79D0CA'}/>
    </Box>
  )
}

export default FirstSmallPart;
