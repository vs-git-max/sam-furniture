const logout = (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true, secure: false });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(`Error in the logout controller ${error}`);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export default logout;
