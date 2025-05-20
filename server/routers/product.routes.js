import express from "express";
import fetchFilteredProducts from "../controllers/productControllers/fetchFilteredProduct";
import addNewProduct from "../controllers/productControllers/addNewProduct";
import deleteProduct from "../controllers/productControllers/deleteProduct";
import updateProduct from "../controllers/productControllers/updateProduct";

const router = express.Router();

router.get("/admin/get", fetchFilteredProducts);
router.post("/admin/post-product", addNewProduct);
router.delete("/admin/delete-product/:id", deleteProduct);
router.put("/admin/update-product/:id", updateProduct);

export default router;
