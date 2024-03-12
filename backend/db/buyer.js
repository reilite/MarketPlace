const mongoose = require("mongoose");
const { DB_URL } = require("../config");

mongoose.connect(DB_URL);

const BuyerSchema = new mongoose.Schema({
  username: String,
  password: String,
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

export const Buyer = mongoose.model("Buyer", BuyerSchema);
