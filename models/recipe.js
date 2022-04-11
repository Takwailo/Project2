const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
    type: String,
    enum: ['Italian', 'Japanese', 'Chinese', 'Indian', 'American'],
    required: true
});


const recipesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredients'}],
    method: {
        type: String,
        require: true
    },
    crusine: [cuisineSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    timestamps: true,
    like: Boolean,
});

module.exports = mongoose.model('Recipes', recipesSchema);