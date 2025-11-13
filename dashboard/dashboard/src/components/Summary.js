import React from "react";
import Holdings from "./Holdings";
import Equity from "./Equity";

const Summary = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-6 text-gray-800">Hi, User!</h2>
      <Equity />

      <Holdings />

      <div className="border-t pt-4 text-sm text-gray-500">
        <p>All figures are approximate. Last updated just now.</p>
      </div>
    </div>
  );
};

export default Summary;
