const updateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.log(`Error in the updateProduct controller ${error.message}`);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
};

export default updateProduct;
