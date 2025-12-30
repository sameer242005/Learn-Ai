import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate("/roadmap", { state: { skill: query } });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g., Machine Learning"
        className="w-full px-6 py-4 rounded-full bg-white border shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
      />
    </form>
  );
}