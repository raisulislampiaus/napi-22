const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  division: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Division',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  image: { type: String, required: true },
}, { timestamps: true });

const itemsModel = mongoose.model("users", itemsSchema);

module.exports = itemsModel;
