import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User is required"],
    },
    orderItem: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: [true, "Product is required"],
        },
        qty: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    shippingInfo: {
      address: {
        type: String,
        required: [true, "Address is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      postalCode: {
        type: String,
        required: [true, "Postal code is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
      },
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentInfo: {
      id: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["Processing", "Success", "Failed"],
        default: "Processing",
      },
      typeofPayment: {
        type: String,
        enum: ["Cash", "Card", "UPI"],
      },
    },
    orderStatus: {
      type: String,
      required: true,
      default: "Processing",
    },
    deliveredAt: {
      type: Date,
      default: null, // or you can omit this line if you want 'null' as the default
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("order", orderSchema);
export default Order;
