import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from '../Pages/Admin/components/Card'
import VisitsRoutes from './VisitRoutes'

const BusinessRoutes = () => {
  return (
    <Routes>
        <Route path="/leads" element={<Card />} />
        <Route path="/appointments" element={<Card />} />
        <Route path="/visits/*" element={<VisitsRoutes />} />
        <Route path="/prescription" element={<Card />} />
        <Route path="/procedure" element={<Card />} />
        <Route path="/conversion" element={<Card />} />
        <Route path="/revenue" element={<Card />} />
        <Route path="/collection" element={<Card />} />
  </Routes>
  )
}

export default BusinessRoutes
