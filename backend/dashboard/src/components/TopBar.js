import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="bg-white shadow-sm border-b flex justify-between items-center px-6 py-2">
      <div className="flex items-center gap-10 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <p className="font-semibold">NIFTY 50</p>
          <span className="text-red-500">100.2</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">SENSEX</p>
          <span className="text-red-500">100.2</span>
        </div>
      </div>

      <div className="w-1/3">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="w-full px-4 py-1.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
