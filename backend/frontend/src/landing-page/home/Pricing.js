import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto px-6 py-20 bg-white text-center">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Unbeatable pricing
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>

        {/* ✅ Fixed: Changed <a> to <button> */}
        <button
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:underline transition"
          onClick={() => {
            // Add your navigation logic here
            console.log("See pricing clicked");
          }}
        >
          See pricing
          <i className="fa fa-long-arrow-right text-blue-600" aria-hidden="true"></i>
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="bg-gray-50 rounded-2xl shadow-md p-10 w-72 hover:shadow-lg transition">
          <h1 className="text-6xl font-extrabold text-blue-600 mb-3">
            <i className="fa fa-inr" aria-hidden="true"></i>0
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Free equity delivery and direct mutual funds
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-md p-10 w-72 hover:shadow-lg transition">
          <h1 className="text-6xl font-extrabold text-blue-600 mb-3">
            <i className="fa fa-inr" aria-hidden="true"></i>20
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Intraday and F&O trades
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
