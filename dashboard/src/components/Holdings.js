import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { VerticlaGraph } from "./VerticalGraph";
import { useAuth } from "../context/AuthContext";

const Holdings = () => {
  const { isAuthenticated } = useAuth();
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    let cancelled = false;
    const fetchHoldings = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3002/allHoldings", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (!cancelled) {
          setAllHoldings(response.data || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err.response?.data?.message || "Failed to load holdings from server."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchHoldings();

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = useMemo(() => allHoldings.map((stock) => stock.name), [allHoldings]);

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Stock Price",
          data: allHoldings.map((stock) => Number(stock.price) || 0),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    }),
    [labels, allHoldings]
  );

  const totals = useMemo(
    () =>
      allHoldings.reduce(
        (acc, stock) => {
          const qty = Number(stock.qty) || 0;
          const avg = Number(stock.avg) || 0;
          const price = Number(stock.price) || 0;
          const invested = avg * qty;
          const current = price * qty;
          const pnl = current - invested;

          acc.invested += invested;
          acc.current += current;
          acc.pnl += pnl;

          return acc;
        },
        { invested: 0, current: 0, pnl: 0 }
      ),
    [allHoldings]
  );
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

      {loading && (
        <div className="mb-4 text-blue-600 text-sm">Loading holdings…</div>
      )}
      {error && (
        <div className="mb-4 text-red-500 text-sm" role="alert">
          {error}
        </div>
      )}

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
            {allHoldings.length === 0 && !loading && !error && (
              <tr>
                <td colSpan={8} className="py-4 text-center text-gray-500">
                  No holdings available yet.
                </td>
              </tr>
            )}
            {allHoldings.map((stock, index) => {
              // Calculations
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;
              const currentValue = price * qty;
              const investedValue = avg * qty;
              const pnl = currentValue - investedValue;
              const pnlPercent = investedValue
                ? (pnl / investedValue) * 100
                : 0;

              const netChange = price - avg;
              const netChangePercent = avg ? (netChange / avg) * 100 : 0;

              const isProfit = pnl >= 0;
              const pnlClass = isProfit ? "text-green-600" : "text-red-500";
              const dayChangeDisplay =
                typeof stock.day === "string"
                  ? stock.day
                  : stock.dayChange != null
                  ? `${Number(stock.dayChange).toFixed(2)}%`
                  : "--";

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-3 font-medium">{stock.name}</td>
                  <td className="py-2 px-3">{qty}</td>
                  <td className="py-2 px-3">₹{avg.toFixed(2)}</td>
                  <td className="py-2 px-3">₹{price.toFixed(2)}</td>
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
                    {dayChangeDisplay}
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
            ₹{totals.invested.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Current Value</span>
          <span>
            ₹{totals.current.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Total P&amp;L</span>
          <span
            className={totals.pnl >= 0 ? "text-green-600" : "text-red-500"}
          >
            ₹{totals.pnl.toFixed(2)}
          </span>
        </div>
      </div>
      <VerticlaGraph data={chartData} />
    </div>
  );
};

export default Holdings;
