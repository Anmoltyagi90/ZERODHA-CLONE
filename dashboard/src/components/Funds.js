import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-5">
        <p className="text-gray-700 text-sm">
          Instant, <span className="font-medium">Zero-cost</span> fund transfers with{" "}
          <span className="font-semibold">UPI</span>
        </p>

        <div className="flex gap-3">
          <Link
            to="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Add Funds
          </Link>
          <Link
            to="#"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition"
          >
            Withdraw
          </Link>
        </div>
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between text-sm text-gray-700 mb-2">
          <span className="font-semibold">Equity</span>
          <span className="font-semibold text-green-600">₹3,740.00</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Used Margin</span>
          <span>₹0.00</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Available Funds</span>
          <span>₹3,740.00</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>Opening Balance</span>
          <span>₹3,740.00</span>
        </div>
      </div>
    </div>
  );
};

export default Funds;
