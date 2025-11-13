import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 md:px-40">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">Support Portal</h1>
          <p className="text-gray-600">
            Search for an answer or browse help topics to create a ticket.
          </p>

          <input
            type="text"
            placeholder="E.g. How do I activate F&O? Why is my order getting rejected?"
            className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />

          <div className="flex flex-wrap gap-3 text-blue-600 font-medium">
            <button className="hover:underline" onClick={() => console.log("Track account opening clicked")}>
              Track account opening
            </button>
            <button className="hover:underline" onClick={() => console.log("Track segment activation clicked")}>
              Track segment activation
            </button>
            <button className="hover:underline" onClick={() => console.log("Intraday margins clicked")}>
              Intraday margins
            </button>
            <button className="hover:underline" onClick={() => console.log("Kite user manual clicked")}>
              Kite user manual
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6 bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Track Ticket</h2>

          <h1 className="text-3xl font-semibold text-gray-800">Featured</h1>
          <ol className="list-decimal list-inside space-y-3 text-blue-600">
            <li>
              <button
                className="hover:underline"
                onClick={() => console.log("Current Takeovers clicked")}
              >
                Current Takeovers and Delisting – January 2024
              </button>
            </li>
            <li>
              <button
                className="hover:underline"
                onClick={() => console.log("Latest Intraday Leverages clicked")}
              >
                Latest Intraday Leverages – MIS & CO
              </button>
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
};

export default Hero;
