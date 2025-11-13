import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("https://zerodha-clone-3fa0.onrender.com/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.valid) {
            // ✅ Agar token valid hai to redirect dashboard par
            window.location.href = "https://zerodha-clone-frontend.onrender.com/dashboard";
          } else {
            localStorage.removeItem("token");
            navigate("/login");
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center text-gray-600">
      Redirecting to your dashboard...
    </div>
  );
};

export default DashboardRedirect;
