import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SmallPart from './SmallPart'

const AreaNumberCard = () => {
  const first ={
    name:"Rajouri Garden", total:"7,000", textColor:'#79D0CA',
  }
  const second ={
    name:"Patel Nagar", total:"1,100", textColor:'#F9BF09',
  }
  const third ={
    name:"Vasant Kunj", total:"3,500", textColor:'#FF9F22',
  }

  const fourth ={
    name:"Tilak Nagar", total:"1,700", textColor:'#FA6361',
  }
  const fifth ={
    name:"Rohini", total:"1,100", textColor:'#2696F7',
  }
  const sixth ={
    name:"Lajpat Nagar", total:"1,050", textColor:'#ABA3EA',
  }

  const seventh ={
    name:"Dwarka", total:"1,750", textColor:'#F95E5B',
  }
  const eighth ={
    name:"Saket", total:"2,200", textColor:'#5E57DE',
  }
  const ninth ={
    name:"Hauz Khas", total:"2,400", textColor:'#18CCE2',
  }

  const firstRow ={
    first,second, third
  }
  const secondRow ={
    fourth,fifth, sixth
  }
  const thirdRow ={
    seventh,eighth, ninth
  }
  const data1 = {
    firstRow,secondRow,thirdRow
  }
  return (
    <Grid xs={12} md={6} lg={4} border={'1px solid black'} padding={'10px'} borderRadius={'5px'} width='35%'>
       <Typography>Areas</Typography>
      <SmallPart data={data1}/>
    </Grid>
  )
}

export default AreaNumberCard
