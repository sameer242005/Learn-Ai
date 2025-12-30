import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1
        onClick={() => navigate("/home")}
        className="text-2xl font-bold text-indigo-600 cursor-pointer"
      >
        LearnAI
      </h1>

      <div className="flex items-center gap-6">
        <span className="text-gray-600 text-sm">
          Welcome, <b>{user?.name}</b>
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
