import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // ✅ Redirect to main dashboard (तुम्हारे frontend/dashboard app का URL)
      window.location.href = "http://localhost:3000/dashboard"; 
    } else {
      // ✅ If not logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center text-gray-600">
      Redirecting to your dashboard...
    </div>
  );
};

export default DashboardRedirect;
