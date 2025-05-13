import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).json({
        success: false,
        message: "No token found",
      });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded)
      return res.status(400).json({ success: false, message: "Invalid token" });

    const user = await User.findById(decoded.userId).select("-password");

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    next();
  } catch (error) {
    console.log("Error in the verifyToken middleware.");
    res.status(500).json({ success: false, error: "Internal server error." });
  }
};

export default protectRoute;
