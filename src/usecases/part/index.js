const Part = require('../../models/parts').model;

const getAll = async() => {
    return await Part.find({}).exec();
}
const getById = async(id) => {
    const part = await Part.findById(id).exec();
    return part;
}
const create = async(partData) => {
    const { name, price, description, image } = partData;
    const newPart = new Part({ name, price, description, image });
    const savePart = await newPart.save();
    return savePart;
}
const update = async(id, partData) => {
        const { name, price, description, image } = partData;
        const updatePart = await Part.findByIdAndUpdate(id, { name, price, description, image }, { new: true }).exec();
        return updatePart;
    }
    /* const patch = async(id, partData) => {
        return await Part.findByIdAndUpdate(id, {...partData }, { new: true }).exec();
    } */
const del = async(id) => {
    return await Part.findByIdAndDelete(id).exec();
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    del
}