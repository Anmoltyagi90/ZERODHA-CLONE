import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Holdings ({allHoldings.length})
      </h3>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="min-w-full border-collapse text-sm text-left">
          <thead>
            <tr className="bg-blue-100 text-gray-700 uppercase text-sm">
              <th className="px-6 py-3">Instrument</th>
              <th className="px-6 py-3">Qty.</th>
              <th className="px-6 py-3">Avg. cost</th>
              <th className="px-6 py-3">LTP</th>
              <th className="px-6 py-3">Cur. val</th>
              <th className="px-6 py-3">P&L</th>
              <th className="px-6 py-3">Net chg.</th>
              <th className="px-6 py-3">Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
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
                    {stock.name}
                  </td>
                  <td className="px-6 py-3">{stock.qty}</td>
                  <td className="px-6 py-3">{stock.avg.toFixed(2)}</td>
                  <td className="px-6 py-3">{stock.price.toFixed(2)}</td>
                  <td className="px-6 py-3">{curValue.toFixed(2)}</td>
                  <td className={`px-6 py-3 font-semibold ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-6 py-3 ${profClass}`}>{stock.net}</td>
                  <td className={`px-6 py-3 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            29,875.<span className="text-gray-500">55</span>
          </h5>
          <p className="text-gray-500 text-sm mt-1">Total investment</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h5 className="text-xl font-bold text-gray-800">
            31,428.<span className="text-gray-500">95</span>
          </h5>
          <p className="text-gray-500 text-sm mt-1">Current value</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h5 className="text-xl font-bold text-green-600">
            1,553.40 <span className="text-sm text-green-500">(+5.20%)</span>
          </h5>
          <p className="text-gray-500 text-sm mt-1">P&L</p>
        </div>
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Stock Price Overview
        </h4>
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;
