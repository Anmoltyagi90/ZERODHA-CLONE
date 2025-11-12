import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qtr: stockQuantity,
      price: stockPrice,
      mode: "Buy",
    });
    closeBuyWindow();

  };

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-5 w-80">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Buy {uid}</h3>

        <div className="flex flex-col gap-3 mb-4">
          <fieldset className="border border-gray-300 rounded p-2">
            <legend className="text-sm text-gray-600">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              className="w-full outline-none"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset className="border border-gray-300 rounded p-2">
            <legend className="text-sm text-gray-600">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              className="w-full outline-none"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>

        <div className="text-sm text-gray-600 mb-3">
          Margin required: ₹140.65
        </div>

        <div className="flex justify-between">
          <Link
            to="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            onClick={handleBuyClick}
          >
            Buy
          </Link>

          <Link
            to="#"
            onClick={handleCancelClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
