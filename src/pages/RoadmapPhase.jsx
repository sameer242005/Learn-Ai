import { useLocation } from "react-router-dom";

export default function RoadmapPhase() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const skill = params.get("skill") || "Machine Learning";
  const phase = params.get("phase") || "0";

  if (phase !== "0") {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold">
          Phase {phase} coming soon 🚧
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* HEADER */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400">
            {skill} Roadmap
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            🟢 PHASE 0 — Foundation of Your ML Thinking
          </h1>
        </div>

        {/* HOW TO STUDY */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-yellow-800 mb-3">
            👨‍🏫 How I want you to study this phase
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Do not rush. This phase decides everything later.</li>
            <li>Watch → pause → try → explain aloud.</li>
            <li>If something feels confusing, that is normal.</li>
            <li>We are building thinking, not memorization.</li>
          </ul>
          <p className="mt-4 italic text-gray-600">
            “Slow is smooth. Smooth becomes fast.”
          </p>
        </div>

        {/* BIG TRUTH */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-indigo-700 mb-3">
            🧠 A very important truth
          </h2>
          <p className="text-gray-800 leading-relaxed">
            You don’t forget because you’re weak.
            <br />
            You forget because concepts were never connected.
            <br /><br />
            Phase 0 is about creating those connections so ML
            feels logical instead of scary.
          </p>
        </div>

        {/* PART 0.1 PYTHON */}
        <section className="space-y-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            🔵 PART 0.1 — Python (as a thinking tool)
          </h2>

          {[
            {
              title: "Variables — Computer Memory",
              text:
                "A computer cannot remember anything unless you tell it to. Variables are memory.",
              code: "age = 21",
              ml: "Weights, bias, learning rate — all are variables.",
              trick: "If you want the computer to remember → variable.",
            },
            {
              title: "Data Types — Nature of Information",
              text:
                "Numbers, text, and yes/no are not the same. The computer must know the type.",
              code: `marks = 85\nname = "Sameer"\npassed = True`,
              ml: "ML understands ONLY numbers. Everything else becomes numbers.",
              trick: "Mixed types = confusion.",
            },
            {
              title: "Lists — Grouping Similar Things",
              text:
                "When you naturally group similar values, you are thinking in lists.",
              code: "marks = [70, 80, 90]",
              ml: "Datasets are lists of rows.",
              trick: "Many values of same type → list.",
            },
            {
              title: "Dictionaries — Meaning + Value",
              text:
                "Your brain remembers meaning, not just values.",
              code: `student = {"name": "Sameer", "marks": 85}`,
              ml: "Dataset columns are key → value mappings.",
              trick: "If meaning matters → dictionary.",
            },
            {
              title: "Loops — Repetition",
              text:
                "ML improves by repeating calculations again and again.",
              code: `for i in range(5):\n  print(i)`,
              ml: "Training, epochs, gradient descent are loops.",
              trick: "If it repeats → loop.",
            },
            {
              title: "Functions — Pack Your Thinking",
              text:
                "Functions are reusable thinking blocks.",
              code: `def average(a, b):\n  return (a + b)/2`,
              ml: "Loss functions, activation functions.",
              trick: "Reusable logic → function.",
            },
            {
              title: "OOPS — Real World Thinking",
              text:
                "You naturally think in objects. Python lets you do that.",
              code: `class Model:\n  def train(self):\n    pass`,
              ml: "model.fit(), model.predict() are object actions.",
              trick: "Properties + actions → class.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
              <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
                {item.code}
              </pre>
              <p className="text-indigo-700">
                <strong>ML Connection:</strong> {item.ml}
              </p>
              <p className="italic text-gray-600">
                🧠 Memory Tip: {item.trick}
              </p>
            </div>
          ))}

          {/* PAUSE */}
          <div className="bg-gray-100 border-l-4 border-indigo-500 rounded-xl p-5">
            <h4 className="font-semibold mb-2">⏸ Pause & Think</h4>
            <p>
              Can you explain variables, lists, dictionaries,
              and loops without looking?
            </p>
            <p className="text-sm text-gray-500 mt-2">
              If not — stop here. This is important.
            </p>
          </div>

          {/* PYTHON YOUTUBE */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              🎯 Your Task (Python)
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  ▶ CodeWithHarry – Python Playlist
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/rfscVS0vtbw"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  ▶ freeCodeCamp – Python Full Course
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* PART 0.2 MATH */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            🟢 PART 0.2 — Math (without fear)
          </h2>

          <div className="bg-white border rounded-2xl p-6 space-y-4">
            <p>
              Math is not formulas.  
              Math is describing patterns using numbers.
            </p>
            <p>
              If ML is learning → Calculus  
              <br />
              If ML is guessing → Probability  
              <br />
              If data is rows & columns → Linear Algebra
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              🎯 Your Task (Math)
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 hover:underline"
                >
                  ▶ StatQuest – Linear Algebra
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 hover:underline"
                >
                  ▶ StatQuest – Probability & Statistics
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/WUvTyaaNkzM"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 hover:underline"
                >
                  ▶ 3Blue1Brown – Calculus Intuition
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* FINAL CHECK */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-3">
            👋 Before you move on
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Can I explain Python basics confidently?</li>
            <li>Do I understand why ML needs math?</li>
            <li>Can I explain this to someone else?</li>
          </ul>
          <p className="mt-4 italic text-gray-600">
            If yes — you’re ready.  
            If no — slow down. That’s okay.
          </p>
        </div>

      </div>
    </div>
  );
}
