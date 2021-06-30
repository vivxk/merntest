const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    dob: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true
    },
},

{ timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);