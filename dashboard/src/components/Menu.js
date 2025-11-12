import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const getUserInitials = () => {
    if (!user || !user.name) return "U";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserDisplayName = () => {
    if (!user || !user.name) return "User";
    return user.name.split(" ")[0];
  };

  return (
    <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
      <img src="kite-logo.svg" alt="Kite Logo" className="h-10" />
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:bg-blue-600 ${
            isActive
              ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
              : ""
          }`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `hover:bg-blue-600 ${
            isActive
              ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
              : ""
          }`
        }
      >
        Orders
      </NavLink>

      <NavLink
        to="/holdings"
        className={({ isActive }) =>
          `hover:bg-blue-600 ${
            isActive
              ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
              : ""
          }`
        }
      >
        Holdings
      </NavLink>

      <NavLink
        to="/positions"
        className={({ isActive }) =>
          `hover:bg-blue-600 ${
            isActive
              ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
              : ""
          }`
        }
      >
        Positions
      </NavLink>

      <NavLink
        to="/funds"
        className={({ isActive }) =>
          `hover:bg-blue-600 ${
            isActive
              ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
              : ""
          }`
        }
      >
        Funds
      </NavLink>

      <NavLink
        to="/apps"
        className={({ isActive }) =>
          `hover:bg-blue-600 ${
            isActive
              ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
              : ""
          }`
        }
      >
        Apps
      </NavLink>

      <div className="relative flex items-center gap-2">
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex items-center justify-center bg-blue-600 text-white w-8 h-8 rounded-full font-semibold text-xs">
            {getUserInitials()}
          </div>
          <p className="text-xs text-gray-700 font-medium">
            {getUserDisplayName()}
          </p>
        </div>

        {showDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDropdown(false)}
            ></div>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
              <div className="p-3 border-b border-gray-200">
                <p className="text-sm font-semibold text-gray-900">
                  {user?.name || "User"}
                </p>
                <p className="text-xs text-gray-500 mt-1">{user?.email || ""}</p>
              </div>
              <div className="p-1">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    logout();
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition"
                >
                  Sign out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
