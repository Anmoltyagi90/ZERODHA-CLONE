import React from "react";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";
import Holdings from "./Holdings";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="hidden md:block w-1/4 border-r bg-white shadow-sm">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </aside>

      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto bg-transparent">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<App />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
