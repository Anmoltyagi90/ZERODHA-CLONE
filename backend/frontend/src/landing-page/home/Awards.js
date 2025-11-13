import React from "react";

const Awards = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-6 py-16 bg-gray-50 rounded-2xl shadow-md">
      <div className="flex-shrink-0">
        <img
          src="/media/images/largestBroker.svg"
          alt="trophy"
          className="w-72 md:w-96 drop-shadow-lg"
        />
      </div>

      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Largest stock broker in India
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
          2+ million Zerodha clients contribute to over 15% of all retail order
          volumes in India daily by trading and investing in:
        </p>

        <div className="grid grid-cols-2 gap-6">
          <ol className="list-disc list-inside space-y-2 text-gray-700">
            <li>Futures and Options</li>
            <li>Commodity Derivatives</li>
            <li>Currency Derivatives</li>
          </ol>

          <ol className="list-disc list-inside space-y-2 text-gray-700">
            <li>Stocks & IPOs</li>
            <li>Direct Mutual Funds</li>
            <li>Bonds and ETFs</li>
          </ol>

          <div className="flex items-center justify-between">
            <img
              src="/media/images/pressLogos.png"
              alt="press logos"
              className="h-6 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
