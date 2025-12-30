import { useNavigate, useLocation } from "react-router-dom";

export default function RoadmapOverview() {
  const navigate = useNavigate();
  const location = useLocation();

  const skill =
    new URLSearchParams(location.search).get("skill") ||
    "Machine Learning";

  const phases = [
    {
      phase: "PHASE 0",
      title: "Prerequisites",
      duration: "2–3 Weeks",
      description:
        "Strong Python + essential Math foundations so ML feels easy, not scary.",
      icon: "🧱",
    },
    {
      phase: "PHASE 1",
      title: "Data Analysis & Preprocessing",
      duration: "2 Weeks",
      description:
        "Learn how to clean, analyze and prepare real-world data correctly.",
      icon: "🧹",
    },
    {
      phase: "PHASE 2",
      title: "Core Machine Learning Algorithms",
      duration: "4–5 Weeks",
      description:
        "Understand how ML algorithms work and when to use which one.",
      icon: "⚙️",
    },
    {
      phase: "PHASE 3",
      title: "ML Libraries & Pipelines",
      duration: "1 Week",
      description:
        "Master scikit-learn, pipelines, and hyperparameter tuning.",
      icon: "🧰",
    },
    {
      phase: "PHASE 4",
      title: "Projects (Very Important)",
      duration: "3 Weeks",
      description:
        "Build real, resume-worthy projects that prove your skills.",
      icon: "🧪",
    },
    {
      phase: "PHASE 5",
      title: "Deep Learning",
      duration: "Optional",
      description:
        "Understand neural networks, CNNs, and modern deep learning ideas.",
      icon: "🧠",
    },
    {
      phase: "PHASE 6",
      title: "Interview Preparation",
      duration: "—",
      description:
        "Crack ML interviews with confidence and strong explanations.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-gray-400 text-sm">
            Learning Roadmap
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
            🚀 {skill}
          </h1>

          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Zero → Pro → Interviews  
            <br />
            Learn step-by-step with clarity, structure, and confidence.
          </p>

          <div className="mt-8 text-lg">
            🧱 Math & Python → ⚙️ ML → 🧠 Deep Learning → 🧪 Projects → 🎯 Interviews
          </div>
        </div>

        {/* TIMELINE / PHASES */}
        <div className="relative border-l border-gray-200 ml-4 md:ml-8">
          {phases.map((p, index) => (
            <div
              key={index}
              className="relative pl-10 pb-14 group"
            >
              {/* Dot */}
              <div className="absolute -left-[10px] top-2 w-5 h-5 bg-indigo-600 rounded-full" />

              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm group-hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <p className="text-sm font-semibold text-indigo-600">
                    {p.phase}
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mt-3">
                  {p.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  ⏱ {p.duration}
                </p>

                <p className="text-gray-700 mt-4">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() =>
              navigate(
                `/roadmap/phase?skill=${encodeURIComponent(skill)}&phase=0`
              )
            }
            className="bg-indigo-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Start Learning 🚀
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-400 mt-16">
          Designed for focus • Built for growth • Powered by AI
        </p>
      </div>
    </div>
  );
}
