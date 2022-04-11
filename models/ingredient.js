const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientsSchema = new Schema ({
    ingredient: {typer: String, required: true,
    },
    like: Boolean
})

module.exports = mongoose.model('Ingredients', ingredientsSchema);