const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  title: String,
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredients" }],
  method: [{ type: String }],
  cuisine: {
    type: String,
    enum: ["Italian", "Japanese", "Chinese", "Indian", "American"],
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  userName: String,
});

module.exports = mongoose.model("Recipes", recipesSchema);
