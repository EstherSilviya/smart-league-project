import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin_Dashboard from "./pages/Admin_Dashboard/Admin_Dashboard";
import Published from "./pages/Published/Published";
import Categories from "./pages/Categories/Categories";
import Drafts from "./pages/Drafts/Drafts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Admin_Dashboard />} />
        <Route path="/drafts" element={<Drafts />} />
        <Route path="/published" element={<Published />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;