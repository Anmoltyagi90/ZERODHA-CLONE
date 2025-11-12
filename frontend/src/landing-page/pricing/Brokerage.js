import React from "react";

const Brokerage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-10 md:px-40 py-20 bg-gray-50 text-gray-800">
      
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-semibold mb-4">Brokerage Calculator</h3>
        <ol className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
          <li>Brokerage is calculated per executed order, not per trade.</li>
          <li>Equity delivery trades are free of brokerage charges.</li>
          <li>Intraday and F&O trades are charged at ₹20 or 0.03% (whichever is lower).</li>
          <li>GST of 18% is applicable on brokerage and transaction charges.</li>
          <li>Stamp duty is charged as per the state government rules.</li>
        </ol>
      </div>

      <div className="md:w-1/3 mt-10 md:mt-0 bg-white shadow-md rounded-2xl p-8 text-center">
        <h3 className="text-xl font-semibold mb-3">List of Charges</h3>
        <p className="text-gray-600">
          View detailed breakdown of brokerage, taxes, and other charges applicable on your trades.
        </p>
      </div>
    </div>
  );
};

export default Brokerage;
