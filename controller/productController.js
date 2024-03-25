import Product from "../model/product.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, desc, img, availableQty } = req.body;

    const productExist = await Product.find({ name });
    if (productExist.length > 0) {
      res.status(400).json({ message: "Product already exist" });
      return;
    }

    const product = new Product({
      name,
      slug: name.split(" ").join("-").toLowerCase(),
      price,
      desc,
      img,
      availableQty,
    });
    await product.save();
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const query = req.body;
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: query },
      { new: true },
    );

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
