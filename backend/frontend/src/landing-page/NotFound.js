import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-center mb-10">
      <h1 className="text-3xl font-bold pt-10">404 Not Found</h1>
      <p className="mt-3 text-gray-600">
        Sorry , The pagee you are looking for doess not exist.
      </p>
      <Link
        className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 py-3 px-6 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer mt-4"
        to="/"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
