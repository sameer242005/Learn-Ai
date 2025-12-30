export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
