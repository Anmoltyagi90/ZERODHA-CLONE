import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allPositions");
        setAllPositions(res.data);
      } catch (err) {
        console.error("Error fetching positions:", err);
        if (err.response?.status === 401) {
          alert("Session expired. Please login again.");
          window.location.href = "http://localhost:3000/login";
        }
      }
    };
    fetchPositions();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-gray-700 font-semibold mb-4">Positions (3)</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700 border-t">
          <thead className="text-gray-500 uppercase text-xs border-b">
            <tr>
              <th className="py-2 px-3">Instrument</th>
              <th className="py-2 px-3">Qty</th>
              <th className="py-2 px-3">Avg.</th>
              <th className="py-2 px-3">LTP</th>
              <th className="py-2 px-3 text-right">P&amp;L</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((pos, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="py-2 px-3 font-medium">{pos.name}</td>
                <td className="py-2 px-3">{pos.qty}</td>
                <td className="py-2 px-3">₹{pos.avg}</td>
                <td className="py-2 px-3">₹{pos.ltp}</td>
                <td
                  className={`py-2 px-3 text-right font-semibold ${pos.pnlColor}`}
                >
                  {pos.pnl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between text-sm font-medium text-gray-700 border-t pt-3">
        <span>Total P&amp;L</span>
        <span className="text-green-600">+₹104.0</span>
      </div>
    </div>
  );
};

export default Positions;
