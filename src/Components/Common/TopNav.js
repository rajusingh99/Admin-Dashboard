import { Box, Typography } from '@mui/material'
import React from 'react'
import Rightpart from './Rightpart'
import Profile from './Profile'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const left ={
  display:"flex",justifyContent:"space-between",width:'40%'
}
const main ={
  display:'flex',justifyContent:'space-between',padding:'20px 20px'
}
const TopNav = () => {
  return (
    <Box className="top-nav" sx={main}>
      <Box sx={left}>
           <Typography>TG3</Typography>
           <Typography>Dashboard</Typography>
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-between',width:'27%'}}>
        <Rightpart text='Queue'/>
        <Rightpart text={'1 Feb, 2024 - 4 March,2024'}/>
        <CircleNotificationsIcon/>
        <Profile/>
      </Box>
    </Box>
  )
}

export default TopNav
