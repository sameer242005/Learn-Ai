import { useLocation } from "react-router-dom";

export default function Roadmap() {
  const location = useLocation();
  const skill =
    new URLSearchParams(location.search).get("skill") || "Machine Learning";

  const roadmap = [
    {
      level: "Level 1",
      title: "Introduction & Foundations",
      aiExplanation: `
Machine Learning is a field of Artificial Intelligence that enables systems 
to learn from data instead of being explicitly programmed.

Instead of writing rules manually, we allow the machine to identify patterns
from examples and make decisions on its own.

You should focus here on understanding the *idea*, not the math.
`,
      topics: [
        "What is Machine Learning?",
        "Types of Machine Learning",
        "ML vs AI vs Deep Learning",
        "Real-world applications",
      ],
      video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    },
    {
      level: "Level 2",
      title: "Core Concepts",
      aiExplanation: `
In this level, you’ll understand how machines actually learn.

You’ll explore concepts like data, features, labels, and how models are trained
and tested. These ideas form the backbone of every ML algorithm.

Don’t rush — clarity here will make everything easier later.
`,
      topics: [
        "Training vs Testing data",
        "Features and Labels",
        "Overfitting & Underfitting",
        "Bias-Variance tradeoff",
      ],
      video: "https://www.youtube.com/embed/ukzFI9rgwfU",
    },
    {
      level: "Level 3",
      title: "Hands-on Practice",
      aiExplanation: `
Now it’s time to move from theory to practice.

You’ll start coding ML models using Python and popular libraries.
The goal is not perfection — the goal is confidence.

Mistakes here are part of learning.
`,
      topics: [
        "Python for ML",
        "NumPy & Pandas",
        "Building first ML model",
        "Evaluating model performance",
      ],
      video: "https://www.youtube.com/embed/7eh4d6sabA0",
    },
    {
      level: "Level 4",
      title: "Advanced Topics",
      aiExplanation: `
This level focuses on improving and optimizing models.

You’ll learn how professionals improve accuracy, handle real-world data,
and prepare models for production environments.

This is where you start thinking like an ML engineer.
`,
      topics: [
        "Feature engineering",
        "Model optimization",
        "Ensemble methods",
        "Deployment basics",
      ],
      video: "https://www.youtube.com/embed/QdDoFfkVkcw",
    },
    {
      level: "Level 5",
      title: "Projects & Mastery",
      aiExplanation: `
Mastery comes from building complete systems.

Here, you’ll work on end-to-end projects, from data collection
to deployment. This is the level that prepares you for jobs and interviews.

Think like a problem solver, not just a learner.
`,
      topics: [
        "End-to-end ML project",
        "Working with real datasets",
        "Model deployment",
        "Interview preparation",
      ],
      video: "https://www.youtube.com/embed/aircAruvnKk",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            AI-Guided Learning Path
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            {skill} Roadmap
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl">
            This roadmap explains what to learn, why to learn it,
            and how to move forward — just like an AI mentor guiding you.
          </p>
        </div>

        {/* Levels */}
        <div className="space-y-16">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Level Header */}
              <div className="px-8 py-6 border-b bg-indigo-50/50">
                <p className="text-sm font-medium text-indigo-600">
                  {item.level}
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-1">
                  {item.title}
                </h2>
              </div>

              {/* AI Explanation */}
              <div className="px-8 py-6 bg-gray-50 border-b">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  🤖 AI Mentor Explanation
                </h3>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {item.aiExplanation}
                </p>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-8">

                {/* Topics */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Topics to Cover
                  </h3>
                  <ul className="space-y-3">
                    {item.topics.map((topic, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                      >
                        <span className="text-gray-700">{topic}</span>
                        <input
                          type="checkbox"
                          className="h-5 w-5 accent-indigo-600"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Learn from Video
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden shadow">
                    <iframe
                      src={item.video}
                      title={item.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-20">
          AI-guided • Structured • Confidence-driven learning
        </p>
      </div>
    </div>
  );
}
