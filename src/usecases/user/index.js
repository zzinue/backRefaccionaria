const User = require('../../models/users').model;

const getAll = async() => {
    return await User.find({}).exec();
}
const getById = async(id) => {
    return await User.findById(id).exec();
}
const create = async(userData) => {
    const { username, email, password, role } = userData;
    const newUser = new User({ username, email, password, role });
    return await newUser.save();
}
const update = async(id, userData) => {
    return await User.findByIdAndUpdate(id, {...userData }, { new: true }).exec();
}
const del = async(id) => {
    return await User.findByIdAndDelete(id).exec();
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    del
}