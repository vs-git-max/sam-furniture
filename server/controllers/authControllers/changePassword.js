import validatePassword from "../../helpers/password";
import User from "../../models/userModel";

const changePassword = async (req, res) => {
  try {
    const { newPassword, oldPassword, email } = req.body;

    if (
      [newPassword, oldPassword, email].some(
        (item) => !item || item.trim() === ""
      )
    )
      return res
        .status(404)
        .json({ success: false, message: "Please add all inputs" });

    const user = await User.findById(req.user.id);

    if (!user)
      return res
        .status(403)
        .json({ success: false, message: "User not found" });

    const comparePassword = await validatePassword(user.password, oldPassword);

    if (!comparePassword)
      return res
        .status(404)
        .json({ success: false, message: "Add the correct old password" });

    if (newPassword === oldPassword)
      return res.status(400).json({
        success: false,
        message: "The old and the new password are the same.",
      });
  } catch (error) {
    console.log(`Error in the change password controller ${error.message}`);
    res.status(500).json({ error: "Internal server error", success: false });
  }
};

export default changePassword;
