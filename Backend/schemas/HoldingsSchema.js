const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Decimal,
  price: Decimal,
  net: String,
  day: String,
});

module.exports = { HoldingsSchema };
