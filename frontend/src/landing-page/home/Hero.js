import React from "react";

const Hero = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-center mb-10 py-10">
      <img
        src="/media/images/homeHero.png"
        className="shadow-2xl rounded-2xl mb-5 max-w-full h-auto"
        alt="home hero"
      />
      <h1 className="text-3xl font-bold pt-10">Invest in everything</h1>
      <p className="mt-3 text-gray-600">
        Online platform to invest in stocks, derivatives, mutual funds, and
        more.
      </p>
      <button className="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 py-3 px-6 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer mt-4">
        Signup now
      </button>
    </div>
  );
};

export default Hero;
