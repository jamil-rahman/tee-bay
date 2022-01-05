const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },

    email:{
        type: String,
        trim: true,
        unique: "User with this Email already exists!",
        required: 'Email is required'
    },
    password: {
        type: String,
        required: "Password is required!",
        min: 6,
        required: true
    },
    products:{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },
   

},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)
