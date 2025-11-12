import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChart3, ChevronDown, ChevronUp } from "lucide-react";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutGraph } from "./DoughnoutGraph";

const WatchList = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ include both openBuyWindow and openSellWindow
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
 
  const labels=watchlist.map((stock)=>stock.name)
  const data={
    labels,
    datasets:[
       {
        label: 'price',
        data: watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]
  }

  //     export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div className="w-full border-r bg-white ps-3 py-4 px-3">
      <h2 className="font-semibold text-gray-700 mb-4 text-sm uppercase">
        Watchlist {watchlist.length}/50
      </h2>

      <div className="flex flex-col gap-3 text-sm">
        {watchlist.map((stock, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2 text-gray-700 hover:bg-gray-50 transition-all duration-200 cursor-pointer rounded px-2 relative"
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div>
              <p className="font-semibold text-gray-800">{stock.name}</p>
              <p className="text-xs text-gray-500">₹{stock.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`${stock.color} text-xs font-semibold`}>
                {stock.change}
              </span>

              {hoveredRow === index && (
                <div className="flex items-center gap-2 transition-all duration-200">
                  <Tooltip title="Buy" arrow TransitionComponent={Grow}>
                    <button
                      onClick={() => openBuyWindow(stock.uid)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold"
                    >
                      B
                    </button>
                  </Tooltip>

                  <Tooltip title="Sell" arrow TransitionComponent={Grow}>
                    <button
                      onClick={() => openSellWindow(stock.uid)}
                      className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold"
                    >
                      S
                    </button>
                  </Tooltip>

                  <Tooltip title="Chart" arrow TransitionComponent={Grow}>
                    <BarChart3 className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                  </Tooltip>

                  <div className="relative">
                    <Tooltip
                      title="More options"
                      arrow
                      TransitionComponent={Grow}
                    >
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-1 rounded hover:bg-gray-200"
                      >
                        {openDropdown === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-700" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-700" />
                        )}
                      </button>
                    </Tooltip>

                    {openDropdown === index && (
                      <div className="absolute right-0 top-6 bg-white shadow-md border rounded-md text-xs text-gray-700 w-28">
                        <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                          View details
                        </p>
                        <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                          Add to portfolio
                        </p>
                        <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                          Remove
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <DoughnutGraph data={data} />
    </div>
  );
};

export default WatchList;
