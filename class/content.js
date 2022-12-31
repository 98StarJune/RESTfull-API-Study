const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const contentSchema = new Schema({
    division: {
        first: {
            type: String,
            required: true
        },
        second: {
            type: String,
            required: true
        }
    },
    money: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    memo: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Content', contentSchema);