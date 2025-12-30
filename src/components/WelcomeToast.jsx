import { useEffect } from "react";

export default function WelcomeToast({ user, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        bg-white rounded-xl shadow-lg px-6 py-4
        animate-toast
      "
    >
      <p className="text-sm text-gray-500 text-center">Welcome back</p>
      <h2 className="text-lg font-semibold text-gray-900 text-center">
        {user.name} 👋
      </h2>
      <p className="text-sm text-gray-500 text-center">
        {user.email}
      </p>
    </div>
  );
}
