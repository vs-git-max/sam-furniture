import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  image: String,
  title: String,
  description: String,
  category: String,
  price: Number,
  salesPrice: Number,
  stock: Number,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
