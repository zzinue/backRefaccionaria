const logErrors = (err, req, res, next) => {
    console.log('an error occured');
    console.error(err)
    next(err);
}
const errorHandler = (err, req, res, next) => {
    const { message } = err;
    res.status(500).json({ success: false, message });
}
module.exports = { logErrors, errorHandler };