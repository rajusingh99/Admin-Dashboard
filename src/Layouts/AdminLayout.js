import React from 'react'
import SideNav from '../Components/SideNav'

const AdminLayout = ({children}) => {
  return (
      <SideNav children={children}/>
  )
}

export default AdminLayout
