import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import ProtectedRoute from "./routes/ProtectedRoute";
import Register from "./pages/Register";
import RoadmapOverview from "./pages/RoadmapOverview";
import RoadmapPhase from "./pages/RoadmapPhase";

export default function App() {
  return (
    <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route
    path="/home"
    element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    }
  />

  <Route
    path="/roadmap"
    element={
      <ProtectedRoute>
        <Roadmap />
      </ProtectedRoute>
    }
  />
  <Route
  path="/roadmap/overview"
  element={
    <ProtectedRoute>
      <RoadmapOverview />
    </ProtectedRoute>
  }
/>
<Route
  path="/roadmap/phase"
  element={
    <ProtectedRoute>
      <RoadmapPhase />
    </ProtectedRoute>
  }
/>
</Routes>

  );
}
