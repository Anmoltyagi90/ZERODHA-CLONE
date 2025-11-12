import React from "react";
import {Link} from "react-router-dom";

const Universe = () => {
  return (
    <div className="bg-gray-50 text-gray-800 shadow-sm py-20 px-24 border-t border-b">
      <div className="max-w-7xl max-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 ">The Zerodha Universe</h2>
          <p className="text-gray-600 text-lg md:w-3/4 mx-auto mb-6">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center mb-12">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <img src="/media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" 
            className="h-16 mx-auto mb-5"
            />
            <p className="text-gray-700 text-base leading-relaxed">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" className="h-20 mx-auto mb-5" />
            <p  className="text-gray-700 text-base leading-relaxed">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ">
            <img src="media/images/tijori.svg" alt="" className="h-16 mx-auto mb-5" />
            <p  className="text-gray-700 text-base leading-relaxed">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

           <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ">
            <img src="media/images/streakLogo.png" alt="streakLogo" className="h-16 mx-auto mb-5"/>
            <p  className="text-gray-700 text-base leading-relaxed">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

           <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" className="h-16 mx-auto mb-5" />
            <p  className="text-gray-700 text-base leading-relaxed">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

           <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <img src="media/images/dittoLogo.png" alt="dittoLogo" className="h-16 mx-auto mb-7"/>
            <p  className="text-gray-700 text-base leading-relaxed">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

        </div>
        <div className="text-center mt-8 mb-7">
          <Link to="/signup" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-gray-900 text-2xl font-medium">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
};

export default Universe;
