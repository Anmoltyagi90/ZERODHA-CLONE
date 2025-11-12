import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      // Check for token in URL parameters first (from login redirect)
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");
      const userFromUrl = urlParams.get("user");

      if (tokenFromUrl && userFromUrl) {
        // Store token from URL into localStorage
        const decodedToken = decodeURIComponent(tokenFromUrl);
        const decodedUser = decodeURIComponent(userFromUrl);
        localStorage.setItem("token", decodedToken);
        localStorage.setItem("user", decodedUser);
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        // Verify and use the token
        try {
          const res = await axios.get("http://localhost:3002/auth/verify", {
            headers: { Authorization: `Bearer ${decodedToken}` },
          });

          if (res.data.valid) {
            setUser(JSON.parse(decodedUser));
            setIsAuthenticated(true);
            axios.defaults.headers.common["Authorization"] = `Bearer ${decodedToken}`;
            setLoading(false);
            return;
          }
        } catch (err) {
          console.error("Token verification failed:", err);
        }
      }

      // Check localStorage for existing token
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        try {
          // Verify token with backend
          const res = await axios.get("http://localhost:3002/auth/verify", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (res.data.valid) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
            // Set default axios header for all requests
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          } else {
            // Token invalid, clear storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            delete axios.defaults.headers.common["Authorization"];
          }
        } catch (err) {
          // Token verification failed
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          delete axios.defaults.headers.common["Authorization"];
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    delete axios.defaults.headers.common["Authorization"];
    // Redirect to frontend login page
    window.location.href = "http://localhost:3000/login";
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

