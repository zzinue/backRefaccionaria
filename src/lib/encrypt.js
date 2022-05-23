const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
}
const veryfyPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}
module.exports = { hashPassword, veryfyPassword };