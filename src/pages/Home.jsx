import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FeatureCard from "../components/FeatureCard";
import WelcomeToast from "../components/WelcomeToast";
import { useAuth } from "../context/useAuth";

export default function Home() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!user) return;

    const shouldShow = sessionStorage.getItem("showWelcome");
    if (shouldShow === "true") {
      setTimeout(() => setShowToast(true), 0);
      sessionStorage.removeItem("showWelcome");
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  const skills = [
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Data Science",
    "DSA for Placements",
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] px-6">
      {showToast && user && (
        <WelcomeToast user={user} onClose={() => setShowToast(false)} />
      )}

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-semibold text-center">
          Learn with clarity. <span className="text-indigo-600">Grow smart.</span>
        </h1>

        <div className="mt-10 w-full flex justify-center">
          <SearchBar />
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() =>
                navigate(`/roadmap/overview?skill=${encodeURIComponent(skill)}`)
              }
              className="px-5 py-2 rounded-full bg-white border hover:bg-indigo-50"
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          <FeatureCard title="Structured Roadmaps" />
          <FeatureCard title="Smart Resources" />
          <FeatureCard title="Track Progress" />
        </div>
      </div>
    </div>
  );
}
