import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Dummy user info (since AuthContext removed)
  const user = {
    name: "Demo User",
    email: "demo@example.com",
  };

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

  const handleLogout = () => {
    setShowDropdown(false);
    alert("You have been logged out (demo mode)");
  };

  return (
    <div className="flex items-center gap-6 text-sm font-medium text-gray-700 px-6 py-3 bg-white shadow-md">
      <img src="kite-logo.svg" alt="Kite Logo" className="h-10" />

      {["/", "/orders", "/holdings", "/positions", "/funds", "/apps"].map(
        (path, idx) => {
          const names = ["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive
                    ? "text-white bg-black px-2 py-1 rounded-lg font-semibold"
                    : ""
                }`
              }
            >
              {names[idx]}
            </NavLink>
          );
        }
      )}

      {/* Profile Section */}
      <div className="relative flex items-center gap-2 ml-auto">
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
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">{user.email}</p>
              </div>
              <div className="p-1">
                <button
                  onClick={handleLogout}
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
