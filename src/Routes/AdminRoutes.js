import { Route, Routes } from "react-router-dom";
import Clinic from "../Pages/Admin/components/Clinic";
import BusinessRoutes from "./BussinessRoutes";
import NoPages from "../Pages/Admin/components/NoPages";

const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/business/*" element={<BusinessRoutes />} />
        <Route path="/clinical" element={<Clinic />} />
        <Route path="/embrology" element={<NoPages />} />
        <Route path="/purchage-account" element={<Clinic />} />
      </Routes>
    );
  };
  export default AdminRoutes