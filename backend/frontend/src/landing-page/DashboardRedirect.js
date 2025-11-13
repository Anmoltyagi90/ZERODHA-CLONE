import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashboardRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    else navigate("/dashboard/home"); // Example dashboard route
  }, [navigate]);

  return <p>Redirecting...</p>;
}

export default DashboardRedirect;
