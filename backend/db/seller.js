const mongoose = require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL);

const SellerSchema = new mongoose.Schema({
  username: String,
  password: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export const Seller = mongoose.model("Seller", SellerSchema);
