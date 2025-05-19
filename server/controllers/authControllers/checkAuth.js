import User from "../../models/userModel.js";

const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(`Error in the check Auth ${error.message}`);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};

export default checkAuth;
