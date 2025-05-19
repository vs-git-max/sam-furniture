import { validateEmail } from "../../helpers/email.js";
import { hashPassword } from "../../helpers/password.js";
import User from "../../models/userModel.js";

const signup = async (req, res) => {
  try {
    const { email, password, name, confirmPassword } = req.body;

    // Check if all fields are present
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: "Please add all the input fields",
      });
    }

    // Validate email format
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      return res
        .status(400)
        .json({ success: false, message: "Enter a valid email format." });
    }

    // Check if the email is already taken
    const isUser = await User.findOne({ email }); // Make this call async by using await
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({
          message: "The password is not the same with the confirm password",
          success: false,
        });

    // Hash the password
    const hashedPassword = await hashPassword(password, 12);

    // Create the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user in the database
    await newUser.save();

    // Respond with success
    res.status(200).json({
      message: "User signed up successfully",
      success: true,
    });
  } catch (error) {
    console.log(`Error in the signup controller ${error.message}`);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

export default signup;
