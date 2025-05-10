import { validateEmail } from "../../helpers/email";
import { hashPassword } from "../../helpers/password";
import User from "../../models/userModel";

const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "Please add all the input fields",
      });
    }

    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a valid email format." });
    }

    const hashedPassword = await hashPassword(password, 12);

    const isUser = User.findOne({ email });

    if (isUser) {
      res.status(400).json({
        success: false,
        message: "Marching details please add unique ones or proceed to login",
      });
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
      message: "User signed up success",
      success: true,
    });
  } catch (error) {
    console.log("Error in the signup controller");
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
export default signup;
