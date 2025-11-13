import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row items-center gap-12 px-6 py-16 bg-gray-10 rounded-2xl shadow-md">
      <div className="flex flex-col justify-between items-center gap-8 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-start mb-3">
          Trust with confidence
        </h1>

        <div>
          <h3 className="text-xl  font-semibold text-gray-800 mb-2">
            Customer-first always
          </h3>
          <p>
            That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No spam or gimmicks
          </h3>
          <p className="text-gray-600 leading-relaxed">
            No gimmicks, spam, or annoying push notifications — just
            high-quality apps designed to help you invest at your own pace.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            The Zerodha universe
          </h3>
          <p className="text-gray-600 leading-relaxed">
            A connected ecosystem of financial products built to make investing
            and trading simpler.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Do better with money
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Learn, invest, and grow your wealth with resources and platforms
            designed to help you succeed.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-6">
        <img
          src="/media/images/ecosystem.png"
          alt="Zerodha Ecosystem"
          className="w-[500px] max-w-full rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {/* ✅ Fixed href="#" by using <button> */}
          <button
            className="text-blue-500 font-medium hover:text-blue-800 transition duration-300 inline-flex items-center gap-2"
            onClick={() => console.log("Explore products clicked")}
          >
            Explore our products
            <i className="fa fa-long-arrow-right p-2 text-center" aria-hidden="true"></i>
          </button>

          <button
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition duration-300"
            onClick={() => console.log("Try Kite clicked")}
          >
            Try kite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;
