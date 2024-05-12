import { Route, Routes } from "react-router-dom";
import Clinic from "../Pages/Admin/components/Clinic";
import Source from "../Pages/Admin/components/Source";
import Doctors from "../Pages/Admin/components/Doctors";
import Admin from "../Pages";

const VisitsRoutes = () => {
    return (
      <Routes>
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/source" element={<Source />} />
        <Route path="/area" element={<Admin />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    );
  };
  export default VisitsRoutes;