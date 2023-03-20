var jwt = require('jsonwebtoken');

module.exports.verify = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (authorization) {
            const token = authorization.split(" ")[1];
            req.user = jwt.verify(token, 'jwt-secret');
        }
        next();
    } catch (error) {
        // return 401 error
    }
}