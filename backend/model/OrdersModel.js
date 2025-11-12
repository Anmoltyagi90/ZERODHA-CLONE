const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const OrdersModel = mongoose.model("orders", PositionsSchema);

module.exports = { OrdersModel };
