import { validateEmail } from "../../helpers/email.js";
import User from "../../models/userModel.js";
import validatePassword from "../../helpers/password.js";
import generateTokenAndSetCookie from "../../helpers/generateToken.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ([email, password].some((item) => !item || item.trim() === ""))
      return res
        .status(400)
        .json({ success: false, message: "Please add all the input fields" });

    const validEmail = validateEmail(email);
    if (!validEmail)
      return res
        .status(401)
        .json({ success: false, message: "Enter a valid email" });
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const isPasswordCorrect = await validatePassword(password, user.password);

    if (!isPasswordCorrect)
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });

    generateTokenAndSetCookie(user._id, res);

    return res.status(200).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        id: user._id,
      },
    });
  } catch (error) {
    console.log(`Error in the login  ${error}`);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export default login;
