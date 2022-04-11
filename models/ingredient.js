const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  ingredient: { type: String, required: true },
  category: {
    type: String,
    enum: ["Fruit and Vegetables", "Starch", "Dairy", "Protein", "Fat"],
    required: true,
  },
  like: { type: Boolean, default: true },
});

module.exports = mongoose.model("Ingredients", ingredientSchema);
