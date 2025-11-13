import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-16 px-6 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img src="/media/images/logo.svg" alt="logo" className="h-5 mb-4" />
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            © 2010–2025 Not Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl text-gray-500">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter hover:text-blue-500 transition"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook hover:text-blue-600 transition"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram hover:text-pink-500 transition"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin hover:text-blue-700 transition"></i>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-telegram hover:text-sky-500 transition"></i>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <button className="hover:text-blue-600">About</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Products</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Pricing</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Referral programme</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Careers</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Zerodha.tech</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Press & media</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Zerodha Cares (CSR)</button>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <button className="hover:text-blue-600">Contact us</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Support portal</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Z-Connect blog</button>
            </li>
            <li>
              <button className="hover:text-blue-600">List of charges</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Downloads & resources</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Market overview</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Disclosures</button>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <button className="hover:text-blue-600">Open an account</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Fund transfer</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Trading tools</button>
            </li>
            <li>
              <button className="hover:text-blue-600">Partner programs</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-sm text-gray-600 leading-relaxed max-w-5xl mx-auto border-t pt-8">
        <p>
          Investments in the securities market are subject to market risks; please read all the related documents carefully before investing. The content, tools, and information provided on this platform are solely for educational and informational purposes. We are not responsible for any losses incurred due to the use of this information. Make sure to do your own research or consult a certified financial advisor before making investment decisions. Past performance is not indicative of future results. Use this platform responsibly and invest wisely.
        </p>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        Built with ❤️ by AnmolTyagi — Inspired by Zerodha UI.
      </div>
    </footer>
  );
};

export default Footer;
