import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    slug: {
      type: String,
      required: [true, "Product slug is required"],
      unique: true,
    },
    desc: {
      type: String,
      required: [true, "Product description is required"],
    },
    img: {
      type: String,
      required: [true, "Product image is required"],
      default:
        "https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?w=1380&t=st=1711353487~exp=1711354087~hmac=3f2bf7cd71877033751e9e413dca850b71059ebf023f17a6240f72cb3cd0820a",
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    availableQty: {
      type: Number,
      required: true,
      default: 10,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("product", productSchema);

export default Product;
