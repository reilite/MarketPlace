const mongoose = require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL);

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  inStock: Boolean,
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
  },
});

export const Product = mongoose.model("Product", ProductSchema);
