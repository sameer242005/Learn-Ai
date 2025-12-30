import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FeatureCard from "../components/FeatureCard";
import WelcomeToast from "../components/WelcomeToast";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [showToast, setShowToast] = useState(false);

  const skills = [
    "Machine Learning",
    "Artificial Intelligence",
    "Web Development",
    "Data Science",
    "DSA for Placements",
  ];

  // 🔔 Show welcome toast once after login
  useEffect(() => {
    const shouldShow = sessionStorage.getItem("showWelcome");
    if (shouldShow && user) {
      setShowToast(true);
      sessionStorage.removeItem("showWelcome");
    }
  }, [user]);

  if (loading) {
    return <p className="p-6">Loading profile...</p>;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fafafa] px-6">

      {/* Welcome Toast */}
      {showToast && user && (
        <WelcomeToast user={user} onClose={() => setShowToast(false)} />
      )}

      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">

        {/* Hero */}
        <div className="text-center max-w-3xl mt-4">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Personalized learning, reimagined
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 leading-tight">
            Learn with clarity. <br />
            <span className="text-indigo-600">Grow with direction.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500">
            Clear, structured learning paths tailored to your goals —
            designed to remove confusion and keep you moving forward.
          </p>
        </div>

        {/* Search */}
        <div className="mt-14 w-full flex justify-center">
          <SearchBar />
        </div>

        {/* Skill Pills ✅ FIXED */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-3xl">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() =>
                navigate(
                  `/roadmap/overview?skill=${encodeURIComponent(skill)}`
                )
              }
              className="px-5 py-2 rounded-full text-sm font-medium
                         bg-white text-gray-700
                         border border-gray-200
                         hover:border-indigo-400 hover:text-indigo-600
                         hover:bg-indigo-50
                         transition-all"
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          <FeatureCard
            title="Structured Roadmaps"
            description="Carefully designed learning paths that guide you step by step with clarity."
          />
          <FeatureCard
            title="Intelligent Curation"
            description="The best resources selected thoughtfully so you spend time learning, not searching."
          />
          <FeatureCard
            title="Focused Progress"
            description="Track what matters and move forward with confidence and consistency."
          />
        </div>

        {/* Footer */}
        <p className="mt-24 mb-10 text-sm text-gray-400 text-center">
          Designed for focus • Built for growth • Powered by clarity
        </p>
      </div>
    </div>
  );
}
