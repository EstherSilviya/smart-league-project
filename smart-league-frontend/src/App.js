import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
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
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/management-register" element={<ManagementRegister />} />
        <Route path="/management-dashboard" element={<ManagementDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;