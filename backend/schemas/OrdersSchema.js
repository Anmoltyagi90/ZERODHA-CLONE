const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qtr: Number,
  price: Number,
  mode: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = { OrdersSchema };
