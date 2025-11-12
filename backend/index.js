require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/auth");
// const authenticateToken = require("./middleware/authenticateToken"); // 🔒 disabled for now

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ Missing MONGODB_URI environment variable.");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🧩 Routes
app.use("/auth", authRoutes);

// ✅ Removed authenticateToken temporarily for testing
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.json({ message: "✅ Order saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🧩 MongoDB connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err);
  });
