const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minLength:6
    },
    role : {
        type: String,
        required: true,
        default: "Blog Admin"
    },
},

    { timestamps: true }
);

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);

