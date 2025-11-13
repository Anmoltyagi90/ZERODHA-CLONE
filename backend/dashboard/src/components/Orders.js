import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-10 flex flex-col items-center justify-center text-center h-[300px]">
      <p className="text-gray-600 mb-3 text-sm">
        You haven’t placed any orders today
      </p>

      <Link
        to="/"
        className="text-blue-600 font-medium text-sm hover:underline"
      >
        Get started →
      </Link>
    </div>
  );
};

export default Orders;
