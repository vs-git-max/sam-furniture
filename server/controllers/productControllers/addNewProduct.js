const addNewProduct = async (req, res) => {
  try {
    const { title, description, category, price, salesPrice, stock, image } =
      req.body;
  } catch (error) {
    console.log(`Error in the addNewProduct controller ${error.message}`);
    res.status(500).json({ success: false, error: "Internal server error." });
  }
};

export default addNewProduct;
