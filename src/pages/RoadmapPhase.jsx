import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

export default function RoadmapPhase() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const skill = params.get("skill");
  const phase = params.get("phase");

  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get(`/roadmaps/${skill}?phase=${phase}`)
      .then((res) => setData(res.data))
      .catch(console.error);
  }, [skill, phase]);

  if (!data) return <p className="p-6">Loading phase...</p>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Phase {phase}: {data.title}
      </h1>

      <p className="text-gray-600 mb-6">{data.description}</p>

      <div className="space-y-6">
        {data.topics.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{t.title}</h3>
            <p className="text-gray-700 mt-2">{t.content}</p>

            {t.youtube && (
              <a
                href={t.youtube}
                target="_blank"
                className="text-indigo-600 mt-3 inline-block"
              >
                ▶ Watch Video
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
