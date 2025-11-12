import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import { VerticlaGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-gray-700 font-semibold mb-4">
        Holdings ({allHoldings.length})
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700 border-t">
          <thead className="text-gray-500 uppercase text-xs border-b">
            <tr>
              <th className="py-2 px-3 text-left">Instrument</th>
              <th className="py-2 px-3 text-left">Qty</th>
              <th className="py-2 px-3 text-left">Avg. cost</th>
              <th className="py-2 px-3 text-left">LTP</th>
              <th className="py-2 px-3 text-left">Cur. val</th>
              <th className="py-2 px-3 text-right">P&amp;L</th>
              <th className="py-2 px-3 text-right">Net chg.</th>
              <th className="py-2 px-3 text-right">Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              // Calculations
              const currentValue = stock.price * stock.qty;
              const investedValue = stock.avg * stock.qty;
              const pnl = currentValue - investedValue;
              const pnlPercent = (pnl / investedValue) * 100;

              const netChange = stock.price - stock.avg;
              const netChangePercent = (netChange / stock.avg) * 100;

              const isProfit = pnl >= 0;
              const pnlClass = isProfit ? "text-green-600" : "text-red-500";

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-3 font-medium">{stock.name}</td>
                  <td className="py-2 px-3">{stock.qty}</td>
                  <td className="py-2 px-3">₹{stock.avg.toFixed(2)}</td>
                  <td className="py-2 px-3">₹{stock.price.toFixed(2)}</td>
                  <td className="py-2 px-3">₹{currentValue.toFixed(2)}</td>

                  <td
                    className={`py-2 px-3 text-right font-semibold ${pnlClass}`}
                  >
                    {isProfit ? "+" : "-"}₹{Math.abs(pnl).toFixed(2)}{" "}
                    <span className="text-xs text-gray-500">
                      ({pnlPercent.toFixed(2)}%)
                    </span>
                  </td>

                  <td className={`py-2 px-3 text-right ${pnlClass}`}>
                    {netChange.toFixed(2)} ({netChangePercent.toFixed(2)}%)
                  </td>

                  <td className={`py-2 px-3 text-right ${pnlClass}`}>
                    {stock.dayChange ? `${stock.dayChange.toFixed(2)}%` : "--"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 border-t pt-4 text-sm font-medium text-gray-700">
        <div className="flex justify-between">
          <span>Total Investment</span>
          <span>
            ₹{allHoldings.reduce((acc, s) => acc + s.avg * s.qty, 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Current Value</span>
          <span>
            ₹
            {allHoldings
              .reduce((acc, s) => acc + s.price * s.qty, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Total P&amp;L</span>
          <span
            className={
              allHoldings.reduce(
                (acc, s) => acc + s.price * s.qty - s.avg * s.qty,
                0
              ) >= 0
                ? "text-green-600"
                : "text-red-500"
            }
          >
            ₹
            {allHoldings
              .reduce((acc, s) => acc + s.price * s.qty - s.avg * s.qty, 0)
              .toFixed(2)}
          </span>
        </div>
      </div>
      <VerticlaGraph data={data} />
    </div>
  );
};

export default Holdings;
