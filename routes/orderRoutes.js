import { Router } from "express";
import { createOrder, getOrders } from "../controller/orderController.js";

const orderRoutes = Router();

//api/orders/getorders
orderRoutes.get("/getorders", getOrders);
//  api/orders/createorders
orderRoutes.post("/createorders", createOrder);

export default orderRoutes;
