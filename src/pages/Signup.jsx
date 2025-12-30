import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 page-enter">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-indigo-600 text-center mb-2">
          LearnAI
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Create your account.
        </p>

        <input className="w-full mb-4 px-4 py-3 border rounded-lg" placeholder="Name" />
        <input className="w-full mb-4 px-4 py-3 border rounded-lg" placeholder="Email" />
        <input className="w-full mb-6 px-4 py-3 border rounded-lg" placeholder="Password" />

        <button
          onClick={() => navigate("/")}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
