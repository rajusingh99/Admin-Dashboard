import { Box, Grid } from '@mui/material'
import React from 'react'
import Card from './Admin/components/Card'
import fakeData from '../Constants/fakeData'
import AreaNumberCard from './Admin/components/Area/AreaNumberCard'
import AreaGraphPart from './Admin/components/Area/AreaGraphPart'

const Admin = () => {
    const cardStyle={
        display: "flex",
       justifyContent: "space-between",
    }

  return (
    <Box>
      <Box sx={cardStyle}>
        <Card data={fakeData.first}/>
        <Card data={fakeData.second}/>
        <Card data={fakeData.three}/>
        <Card data={fakeData.fourth}/>
      </Box>
      
      <Grid sx={cardStyle} paddingTop={'20px'} container>
        <AreaNumberCard/>
        <AreaGraphPart/>
      </Grid>
    </Box>
  )
}

export default Admin
