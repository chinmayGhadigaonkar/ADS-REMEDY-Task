import order from "../model/order.js";
import Product from "../model/product.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await order.find({});
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const {
      userName,
      orderItem,
      shippingInfo,
      totalAmount,
      paymentInfo,
      orderStatus,
      deliveredAt,
    } = req.body;

    const newOrder = new order({
      userName,
      orderItem,
      shippingInfo,
      totalAmount,
      paymentInfo,
      orderStatus,
      deliveredAt,
      createdAt: Date.now(),
    });

    const savedOrder = await newOrder.save();
    const updatedQty = await Promise.all(
      orderItem.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product) {
          res.status(404).json({ message: "Product not found" });
          return;
        }
        if (product.availableQty < item.qty) {
          res.status(400).json({ message: "Product is out of stock" });
          return;
        }
        product.availableQty = product.availableQty - item.qty;

        await product.save();
      }),
    );

    const result = await order
      .findById(savedOrder._id)
      .populate("orderItem.product");

    res.status(201).json({ success: true, order: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
