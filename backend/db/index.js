const mongoose = require("mongoose");

const { DB_URL } = require("../config");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);

  // Definig Schema
  const SellerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: 3,
      maxLength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minLength: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  });

  const BuyerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minLength: 3,
      maxLength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minLength: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  });

  const ProductSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  });

  const Seller = mongoose.model("Seller", SellerSchema);
  const Buyer = mongoose.model("Buyer", BuyerSchema);
  const Product = mongoose.model("Product", ProductSchema);
}

module.exports = {
  Seller,
  Buyer,
  Product,
};
