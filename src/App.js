import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'
import TopNav from './Components/Common/TopNav';
import AdminLayout from './Layouts/AdminLayout';
import AdminRoutes from './Routes/AdminRoutes';
import NoPages from './Pages/Admin/components/NoPages';
import Constant from './Constants/Constant';

function App() {
  return (
    <Box className="App">
       <TopNav/>
        {Constant.auth.user.role ==='admin' &&  
         <AdminLayout>
          <BrowserRouter>
              <Routes>
                {<Route path="/admin/*" element={<AdminRoutes />} />}
                <Route path="*" element={<NoPages />} />
              </Routes>
          </BrowserRouter>
        </AdminLayout>}
    </Box>
  );
}

export default App;
