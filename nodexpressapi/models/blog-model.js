const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    heading: {
        type: String,
        required: true,
        maxLength: 20
    },
    desc: {
        type: String,
        required: true,
        maxLength: 250
    },
    blog: {
        type: String,
        required: true,
        maxLength: 20000
    },
    userID : {
        type: String,
        required: true,
        unique: true
    },
},
{ timestamps: true }    
);

blogSchema.plugin(uniqueValidator);

module.exports = mongoose.model('BlogPost',blogSchema)