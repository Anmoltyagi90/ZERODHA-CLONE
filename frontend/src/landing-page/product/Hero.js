import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-center space-y-4 border-b pb-8 py-20">
        <h1 className="text-4xl font-bold">Technology</h1>
        <p className="text-gray-700 leading-relaxed">
          Sllek, modern and intuitve trading platforms
        </p>
        <p className="text-gray-600">
          Check out our{" "}
          <a href="#" className="text-blue-700 hover:text-blue-800">
            Investment offerings{" "}
            <i
              class="fa fa-long-arrow-right text-blue-700"
              aria-hidden="true"
            ></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
