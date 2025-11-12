import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">Pricing</h1>
        <p className="text-gray-600 text-lg">List of all charges and taxes</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-5 md:px-20 pb-20 py-10">
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-8 text-center max-w-sm">
          <img
            src="media/images/pricing0.svg"
            alt="zero"
            className="mx-auto mb-6 h-25"
          />
          <h1 className="text-xl font-semibold mb-3">Free equity delivery</h1>
          <p className="text-gray-600">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-8 text-center max-w-sm">
          <img
            src="/media/images/intradayTrades.svg"
            alt="intraday"
            className="mx-auto mb-6 h-25"
          />
          <h1 className="text-xl font-semibold mb-3">Intraday and F&O trades</h1>
          <p className="text-gray-600">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-8 text-center max-w-sm">
          <img
            src="media/images/pricing0.svg"
            alt="zero"
            className="mx-auto mb-6 h-25"
          />
          <h1 className="text-xl font-semibold mb-3">Free direct MF</h1>
          <p className="text-gray-600">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
