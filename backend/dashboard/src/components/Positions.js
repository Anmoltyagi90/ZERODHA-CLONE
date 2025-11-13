import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="min-w-full border-collapse text-sm text-left">
          <thead>
            <tr className="bg-blue-100 text-gray-700 uppercase text-sm">
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Instrument</th>
              <th className="px-6 py-3">Qty.</th>
              <th className="px-6 py-3">Avg.</th>
              <th className="px-6 py-3">LTP</th>
              <th className="px-6 py-3">P&amp;L</th>
              <th className="px-6 py-3">Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all duration-150"
                >
                  <td className="px-6 py-3 font-medium text-gray-800">
                    {stock.product}
                  </td>
                  <td className="px-6 py-3">{stock.name}</td>
                  <td className="px-6 py-3">{stock.qty}</td>
                  <td className="px-6 py-3">{stock.avg.toFixed(2)}</td>
                  <td className="px-6 py-3">{stock.price.toFixed(2)}</td>
                  <td className={`px-6 py-3 font-semibold ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-6 py-3 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
