const roleModule = require('../models/roles.model');

module.exports = async (req, res, next) => {
    try {
        const user = req.user;
        const userPermissions = await roleModule.findOne({ _id: user.role });
        if (userPermissions.permissions.includes(req.method)) {
            next();
        } else {
            return res.status(403).send({ message: "Not authorized to access endpoint" });
        }
    } catch (error) {
        return res.status(500).send("something went wrong ! try again");
    }
}