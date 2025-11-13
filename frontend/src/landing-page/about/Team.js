import React from "react";

const Team = () => {
  return (
    <section className="bg-white text-gray-700 py-20 px-6 border-y">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800 leading-snug">
            People
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20">
          <div className="flex flex-col items-center text-center md:text-left">
            <img
              src="/media/images/nithinKamath.jpg"
              alt="nithin"
              className="rounded-full w-50 h-50 object-cover mb-6 shadow-md"
            />
            <p className="text-gray-800 text-lg">Nithin Kamath</p>
            <p className="text-gray-500 text-sm">Founder, CEO</p>
          </div>

          <div className="max-w-2xl leading-relaxed text-gray-600 space-y-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>

            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a
                href="https://tradingqna.com" // example external link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Homepage / TradingQnA / Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
