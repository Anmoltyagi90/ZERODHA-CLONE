const mongoose = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const positionsModel = mongoose.model("positions", PositionsSchema);

module.exports = { positionsModel };
