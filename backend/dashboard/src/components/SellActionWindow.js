import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3002";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_BASE_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );
      closeSellWindow();
      alert("Sell order placed successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to place order. Please try again.");
    }
  };

  const { closeSellWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Sell Order</h2>

        <div className="space-y-3">
          <fieldset className="border border-gray-300 rounded px-3 py-2">
            <legend className="text-sm text-gray-500">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              placeholder="Enter quantity"
              className="w-full outline-none"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset className="border border-gray-300 rounded px-3 py-2">
            <legend className="text-sm text-gray-500">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              className="w-full outline-none"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Margin required ₹140.65</span>

          <div className="flex gap-3">
            <Link
              to=""
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              onClick={handleSellClick}
            >
              Sell
            </Link>
            <Link
              to=""
              onClick={handleCancelClick}
              className="border border-gray-300 px-4 py-1 rounded hover:bg-gray-100"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
