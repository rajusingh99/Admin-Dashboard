import React from 'react'
import SideNav from '../Components/SideNav'
import Constant from '../Constants/Constant'

 const auth = Constant.auth
const AdminLayout = ({children,auth,data,tab}) => {
  return (
      <SideNav children={children} auth={auth} data={data} tab={tab}/>
  )
}

export default AdminLayout
