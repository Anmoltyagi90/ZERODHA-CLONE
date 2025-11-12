require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("./schemas/UserSchema");
const { HoldingsModel } = require("./schemas/HoldingsSchema");
const { PositionsModel } = require("./schemas/PositionsSchema");
const { OrdersModel } = require("./schemas/OrdersSchema");


const PORT = process.env.PORT || 3002;
const uri = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET || "development-secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sanitizeUser = (user) => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
});

const generateToken = (user) =>
  jwt.sign(
    {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

    if (!token) {
      return res.status(401).json({ message: "Authentication required." });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await UserModel.findById(decoded.id).lean();

    if (!user) {
      return res.status(401).json({ message: "Invalid authentication token." });
    }

    req.user = sanitizeUser(user);
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    return res
      .status(401)
      .json({ message: "Invalid or expired authentication token." });
  }
};

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "zerodha-clone-backend" });
});

app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email and password are required." });
    }

    const normalizedEmail = email.toLowerCase();
    const existingUser = await UserModel.findOne({
      email: normalizedEmail,
    }).lean();

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Signup successful. Please login.",
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error("Signup error:", error);

    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }

    if (error.name === "ValidationError") {
      const validationMessage =
        Object.values(error.errors || {})
          .map((err) => err.message)
          .join(" ") || "Provided data is invalid.";
      return res.status(400).json({ message: validationMessage });
    }

    return res.status(500).json({
      message: "Unable to complete signup. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = generateToken(user);

    return res.json({
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Unable to login. Please try again later." });
  }
});

app.get("/auth/verify", authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

app.get("/allHoldings", authenticateToken, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/allPositions", authenticateToken, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/newOrder", authenticateToken, async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.json({ message: "Order saved!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

if (!uri) {
  console.error("Missing MONGODB_URI environment variable.");
  process.exit(1);
}

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => {
      console.log(`app is listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
