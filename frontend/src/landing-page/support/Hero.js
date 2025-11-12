import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 md:px-40">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
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
            <a href="#" className="hover:underline">Track account opening</a>
            <a href="#" className="hover:underline">Track segment activation</a>
            <a href="#" className="hover:underline">Intraday margins</a>
            <a href="#" className="hover:underline">Kite user manual</a>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Track Ticket</h2>

          <h1 className="text-3xl font-semibold text-gray-800">Featured</h1>
          <ol className="list-decimal list-inside space-y-3 text-blue-600">
            <li>
              <a href="#" className="hover:underline">
                Current Takeovers and Delisting – January 2024
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest Intraday Leverages – MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
};

export default Hero;
