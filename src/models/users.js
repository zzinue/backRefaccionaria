const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: String, required: false, default: 'admin' },
})
module.exports = {
    schema,
    model: mongoose.model('User', schema),
}