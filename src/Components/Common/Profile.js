import { Box, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
    const profile ={
        border:"1px solid black", borderRadius:"5px",padding:'1px'
    }
  return (
    <Box sx={profile}>
       <Typography>TG3</Typography>
    </Box>
  )
}

export default Profile
