import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      generalContext.closeBuyWindow();
    } catch (error) {
      console.error("Order placement failed:", error);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div
        className="bg-white rounded-2xl shadow-lg w-[350px] sm:w-[400px] p-6 relative"
        id="buy-window"
        draggable="true"
      >
        {/* Header */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Buy <span className="text-blue-600">{uid}</span>
        </h3>

        {/* Input Fields */}
        <div className="space-y-4 mb-5">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Quantity</label>
            <input
              type="number"
              name="qty"
              id="qty"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Margin Info */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm text-gray-500">
            Margin required: ₹140.65
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancelClick}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition"
          >
            Cancel
          </button>
          <button
            onClick={handleBuyClick}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
