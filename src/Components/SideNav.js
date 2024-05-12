import { Box } from '@mui/material'
import React from 'react'

const SideNav = ({children, auth, data, tab}) => {

  return (
    <Box sx={{ display: 'flex'}} className="desktop-layout">
		  side Nav
			<Box component="main" sx={{ flexGrow: 1, p:{xs:1, md:4}, mt:7 }}>
				{ children}
			</Box>
		</Box>
  )
}

export default SideNav
