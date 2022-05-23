const jwt = require('../lib/jwt');

const authHandler = async(req, res, next) => {
    try {
        const { token } = req.headers;
        const verifiedToken = await jwt.verify(token);
        req.params.tokenPayload = verifiedToken;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: 'Invalid token',
        });
    }
}
module.exports = { authHandler };