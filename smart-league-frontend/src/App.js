import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin_Dashboard from "./pages/Admin_Dashboard/Admin_Dashboard";
import Published from "./pages/Published/Published";
import Categories from "./pages/Categories/Categories";
import Drafts from "./pages/Drafts/Drafts";
import AdminLogin from "./pages/AdminLogin";
import ManagementRegister from "./pages/ManagementRegister";
import AdminDashboard from "./pages/AdminDashboard";
import ManagementDashboard from "./pages/ManagementDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ DEFAULT / HOME PAGE */}
        <Route path="/" element={<ManagementRegister />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin-dashboard-ui" element={<Admin_Dashboard />} />
        <Route path="/drafts" element={<Drafts />} />
        <Route path="/published" element={<Published />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/management-register" element={<ManagementRegister />} />
        <Route path="/management-dashboard" element={<ManagementDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;