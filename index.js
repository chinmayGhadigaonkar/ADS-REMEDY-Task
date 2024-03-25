import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connection from "./config/connection.js";

const port = 3000 || process.env.PORT;
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(port, () => {
  connection();

  console.log(`Server is running on port ${port}`);
});

// Build a simple REST API in any language and database of your choice for a hypothetical online restaurant service.
// Requirements: 1. Create, read, update and delete the product
// 2. Place an order for a product
//  3. List all the orders
//  Upload your code on GitHub and share the link.
