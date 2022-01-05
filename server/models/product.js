const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: [{
        type: String
    }],
    rent:{
        type: Number,
    }
    
},{
    timestamps: true
});
module.exports = mongoose.model('Product', ProductSchema)

