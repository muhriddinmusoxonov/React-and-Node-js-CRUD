const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    brand: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const Product = model('Stores', productSchema);

module.exports = Product;