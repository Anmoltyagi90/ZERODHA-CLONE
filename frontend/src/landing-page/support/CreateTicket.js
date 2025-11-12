import React from "react";

const LinkButton = ({ children }) => (
  <button
    type="button"
    className="hover:text-blue-600 focus:outline-none focus:text-blue-700"
  >
    {children}
  </button>
);

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
              <LinkButton>Resident individual</LinkButton>
            </li>
            <li>
              <LinkButton>Minor</LinkButton>
            </li>
            <li>
              <LinkButton>Non Resident Indian (NRI)</LinkButton>
            </li>
            <li>
              <LinkButton>Company, Partnership, HUF and LLP</LinkButton>
            </li>
            <li>
              <LinkButton>Glossary</LinkButton>
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
              <LinkButton>Your Profile</LinkButton>
            </li>
            <li>
              <LinkButton>Account modification</LinkButton>
            </li>

            <li>
              <LinkButton>Client Master Report (CMR) &amp; DP</LinkButton>
            </li>
            <li>
              <LinkButton>Nomination</LinkButton>
            </li>
            <li>
              <LinkButton>Transfer &amp; conversion of securities</LinkButton>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">Kite</h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <LinkButton>IPO General</LinkButton>
            </li>
            <li>
              <LinkButton>Trading FAQs</LinkButton>
            </li>
            <li>
              <LinkButton>Margin Trading Facility (MTF) and Margins</LinkButton>
            </li>
            <li>
              <LinkButton>Charts and Orders</LinkButton>
            </li>
            <li>
              <LinkButton>Alerts and Nudges</LinkButton>
            </li>
            <li>
              <LinkButton>General</LinkButton>
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
              <LinkButton>Add money</LinkButton>
            </li>
            <li>
              <LinkButton>Withdraw money</LinkButton>
            </li>
            <li>
              <LinkButton>Add bank accounts</LinkButton>
            </li>
            <li>
              <LinkButton>eMandates</LinkButton>
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
              <LinkButton>Portfolio</LinkButton>
            </li>
            <li>
              <LinkButton>Corporate actions</LinkButton>
            </li>
            <li>
              <LinkButton>Funds statement</LinkButton>
            </li>
            <li>
              <LinkButton>Reports</LinkButton>
            </li>
            <li>
              <LinkButton>Profile</LinkButton>
            </li>
            <li>
              <LinkButton>Segments</LinkButton>
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
              <LinkButton>Mutual funds</LinkButton>
            </li>
            <li>
              <LinkButton>National Pension Scheme (NPS)</LinkButton>
            </li>
            <li>
              <LinkButton>Fixed Deposit (FD)</LinkButton>
            </li>
            <li>
              <LinkButton>Features on Coin</LinkButton>
            </li>
            <li>
              <LinkButton>Payments and Orders</LinkButton>
            </li>
            <li>
              <LinkButton>General</LinkButton>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Quick Links
          </h2>
          <ol className="list-disc list-inside space-y-2">
            <li>
              <LinkButton>Track account opening</LinkButton>
            </li>
            <li>
              <LinkButton>Track segment activation</LinkButton>
            </li>
            <li>
              <LinkButton>Intraday margins</LinkButton>
            </li>
            <li>
              <LinkButton>Kite user manual</LinkButton>
            </li>
            <li>
              <LinkButton>Learn how to create a ticket</LinkButton>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
