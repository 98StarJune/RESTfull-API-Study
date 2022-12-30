const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    pw: {
        type: String,
        require: true
    },
    email: {
        type: String,
    },
    pn: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);