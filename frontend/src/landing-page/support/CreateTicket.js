import React from "react";

const CreateTicket = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 md:px-40">
      <h1 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
        Create a Ticket
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-blue-700 flex items-center gap-2 mb-3">
            <i className="fa fa-plus" aria-hidden="true"></i> Account Opening
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Resident individual
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Non Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Glossary
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3 gap-3">
            <i class="fa fa-user" aria-hidden="true"></i>
            Your Zerodha Account
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Your Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Account modification
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600">
                Client Master Report (CMR) & DP
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Nomination
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Transfer & conversion of securities
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Kite</h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                IPO General
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Trading FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Margin Trading Facility (MTF) and Margins
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Charts and Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Alerts and Nudges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                General
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            <i class="fa fa-inr" aria-hidden="true"></i>
            Funds
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Add money
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Withdraw money
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Add bank accounts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                eMandates
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
            Console
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Corporate actions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Funds statement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Segments
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            <i class="fa fa-adjust" aria-hidden="true"></i>
            Coin
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Mutual funds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                National Pension Scheme (NPS)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Fixed Deposit (FD)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Features on Coin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Payments and Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                General
              </a>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Quick Links
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Track account opening
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Track segment activation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Intraday margins
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Kite user manual
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Learn how to create a ticket
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
