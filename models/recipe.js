const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
  type: String,
  enum: ["Italian", "Japanese", "Chinese", "Indian", "American"],
});

const recipesSchema = new Schema({
  title: {
    type: String,
  },
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
  method: {
    type: String,
  },
  crusine: [cuisineSchema],
  user: { type: Schema.Types.ObjectId, ref: "User" },
  like: Boolean,
});

module.exports = mongoose.model("Recipes", recipesSchema);
