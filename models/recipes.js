const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
    type: String,
    enum: ['Italian', 'Japanese', 'Chinese', 'Indian', 'American']

});


const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
    },
    method: {
        type: String,
    },
    crusine: [cuisineSchem],
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);