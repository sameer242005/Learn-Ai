import { useParams, useNavigate } from "react-router-dom";
import { phaseContent } from "../data/phaseContent";

export default function PhasePage() {
  const { phaseId } = useParams();
  const navigate = useNavigate();

  const phaseNumber = Number(phaseId);
  const content = phaseContent[phaseNumber];

  if (!content) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Phase content not found
        </h2>
        <button
          onClick={() => navigate("/roadmap/overview")}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded"
        >
          Back to Roadmap
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">{content.title}</h1>

      {content.intro && (
        <p className="text-lg text-gray-700 mb-10 whitespace-pre-line">
          {content.intro}
        </p>
      )}

      {content.sections?.map((section) => (
        <div key={section.id} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

          {section.content && (
            <p className="text-gray-700 whitespace-pre-line">
              {section.content}
            </p>
          )}

          {section.bullets && (
            <ul className="list-disc ml-6 mt-4 space-y-2">
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {section.taskCode && (
            <pre className="bg-black text-green-400 p-4 rounded mt-4 overflow-x-auto">
              {section.taskCode}
            </pre>
          )}
        </div>
      ))}

      {content.quiz && (
        <div className="mt-16 bg-indigo-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">{content.quiz.title}</h2>
          <ul className="space-y-3">
            {content.quiz.questions.map((q, i) => (
              <li key={i}>
                <strong>Q{i + 1}:</strong> {q.q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
