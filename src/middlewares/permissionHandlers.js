const adminHanlder = async(req, res, next) => {
    try {
        console.log('req.params', req.params);
        const { role } = req.params.tokenPayload;
        if (role !== 'admin') {
            throw new Error('No eres admin, no puedes realizar esta acción')
        }
        next()
    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}
module.exports = { adminHanlder }