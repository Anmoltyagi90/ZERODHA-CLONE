const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const JWT_SECRET = process.env.JWT_SECRET || "development-secret";

const sanitizeUser = (user) => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
});

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;

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

module.exports = authenticateToken;

