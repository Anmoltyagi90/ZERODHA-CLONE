import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-center space-y-4 border-b pb-8 py-20">
        <h1 className="text-4xl font-bold">Technology</h1>
        <p className="text-gray-700 leading-relaxed">
          Sleek, modern and intuitive trading platforms
        </p>
        <p className="text-gray-600">
          Check out our{" "}
          <button
            className="text-blue-700 hover:text-blue-800 inline-flex items-center gap-2"
            onClick={() => console.log("Investment offerings clicked")}
          >
            Investment offerings
            <i
              className="fa fa-long-arrow-right text-blue-700"
              aria-hidden="true"
            ></i>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
