const mongoose = require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL);

const TransactionSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Buyer",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prodcut",
  },
  quantity: Number,
  price: Number,
});

export const Transaction = mongoose.model("Transaction", TransactionSchema);
