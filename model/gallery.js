const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        category: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required:true
        },
        imagelink: {
            type:String,
            required: true
        }
       
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Gallery', schema);