const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema ({
    ingredient: {typer: String},
    like: Boolean
})

module.exports = mongoose.model('Ingredient', ingredientSchema);