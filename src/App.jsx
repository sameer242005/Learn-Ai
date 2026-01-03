import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import RoadmapOverview from "./pages/RoadmapOverview";
import PhasePage from "./pages/PhasePage";

export default function App() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/roadmap/overview" element={<RoadmapOverview />} />
        <Route path="/roadmap/phase" element={<PhasePage />} />
      </Routes>
    </>
  );
}
