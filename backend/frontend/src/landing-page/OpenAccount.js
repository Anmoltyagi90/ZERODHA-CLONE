import React from "react";

const OpenAccount = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-center mb-10">
     
      <h1 className="text-3xl font-bold pt-10">Open a Zerodha account</h1>
      <p className="mt-3 text-gray-600">
        Modern platforms and apps, ₹0 investment and flat  ₹20 intraday and F&O trades.
      </p>
      <button className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 py-3 px-6 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer mt-4">
        Signup now
      </button>
    </div>
  );
};

export default OpenAccount;
