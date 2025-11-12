import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Preparing your dashboard…");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      setMessage("Session expired. Redirecting to login…");
      const timeout = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1500);
      return () => clearTimeout(timeout);
    }

    setMessage("Redirecting to dashboard…");
    const encodedToken = encodeURIComponent(token);
    const encodedUser = encodeURIComponent(user);

    window.location.replace(
      `http://localhost:3001?token=${encodedToken}&user=${encodedUser}`
    );
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-4">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        <h1 className="text-xl font-semibold text-gray-900">{message}</h1>
        <p className="text-sm text-gray-500">
          Hang tight while we launch your trading dashboard.
        </p>
      </div>
    </div>
  );
};

export default DashboardRedirect;

