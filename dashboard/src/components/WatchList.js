// src/components/WatchList.js
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart"; // ✅ Fixed spelling

const labels = watchlist.map((item) => item.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(59, 130, 246, 0.5)",
          "rgba(34, 197, 94, 0.5)",
          "rgba(239, 68, 68, 0.5)",
          "rgba(234, 179, 8, 0.5)",
          "rgba(147, 51, 234, 0.5)",
          "rgba(249, 115, 22, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-2 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Watchlist ({watchlist.length}/50)
        </h3>
      </div>

      <div className="flex items-center mb-6 bg-white shadow rounded-2xl p-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, BSE, NIFTY FUT WEEKLY, GOLD MCX"
          className="w-full bg-transparent outline-none px-3 text-gray-700 placeholder-gray-400"
        />
      </div>

      <ul className="shadow-md rounded-xl">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Stock Price Distribution
        </h4>
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      className="px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-150"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex items-center gap-3">
        <p
          className={`font-medium ${
            stock.isDown ? "text-red-600" : "text-green-600"
          }`}
        >
          {stock.name}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`text-sm font-semibold ${
            stock.isDown ? "text-red-600" : "text-green-600"
          }`}
        >
          {stock.percent}
        </span>
        {stock.isDown ? (
          <KeyboardArrowDown className="text-red-500" />
        ) : (
          <KeyboardArrowUp className="text-green-500" />
        )}
        <span className="text-gray-700 font-medium">{stock.price}</span>

        {showActions && <WatchListActions uid={stock.name} />}
      </div>
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <div className="flex items-center gap-2 ml-4">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={handleBuyClick}
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-semibold"
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-semibold">
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
          <BarChartOutlined fontSize="small" className="text-gray-700" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
          <MoreHoriz fontSize="small" className="text-gray-700" />
        </button>
      </Tooltip>
    </div>
  );
};
