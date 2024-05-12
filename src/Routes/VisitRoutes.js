import { Route, Routes } from "react-router-dom";
import Clinic from "../Pages/Admin/components/Clinic";
import Source from "../Pages/Admin/components/Source";
import Area from "../Pages/Admin/components/Area";
import Doctors from "../Pages/Admin/components/Doctors";

const VisitsRoutes = () => {
    return (
      <Routes>
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/source" element={<Source />} />
        <Route path="/area" element={<Area />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    );
  };
  export default VisitsRoutes;