import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await api.post("/login", { email, password });

    localStorage.setItem("token", res.data.access_token);

    setUser({
      name: res.data.user.name,
      email: res.data.user.email,
    });

    navigate("/home");
  } catch (err) {
    setError(
      err.response?.data?.detail || "Invalid email or password"
    );
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          LearnAI Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <input
          className="w-full mb-4 p-3 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full mb-6 p-3 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-indigo-600 text-white py-3 rounded">
          Login
        </button>
        <p className="text-sm text-center text-gray-500 mt-4">
  Don’t have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-indigo-600 cursor-pointer hover:underline"
  >
    Sign up
  </span>
</p>
      </form>
    </div>
  );
}
