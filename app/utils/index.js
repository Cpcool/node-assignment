var jwt = require('jsonwebtoken');

module.exports.issueToken = (payload) => {
    return jwt.sign(payload, 'jwt-secret');
}