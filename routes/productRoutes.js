import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/productController.js";
const productRoutes = Router();

// api/products/getproducts
productRoutes.get("/getproducts", getProducts);
// api/products/createproduct
productRoutes.post("/createproduct", createProduct);
// api/products/updateproduct/:id
productRoutes.put("/updateproduct/:id", updateProduct);
// api/products/deleteproduct/:id
productRoutes.delete("/deleteproduct/:id", deleteProduct);

export default productRoutes;
