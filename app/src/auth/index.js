const userModel = require('../../models/users.model');
const utils = require('../../utils');

module.exports.signUp = async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = userModel.findOne({ username });
        if (user) {
            return res.status(409).send("username already exists");
        }
        await userModel.create({ username, password });
        return res.status(201).send("success");

    } catch (error) {
        return res.status(500).send("something went wrong ! try again");
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await userModel.findOne({ username, password });
        if (user) {
            const payload = { username, role: user.role };
            const token = utils.issueToken(payload);
            return res.status(201).send({ token });
        } else {
            return res.status(401).send("failed !");
        }
    } catch (error) {
        return res.status(500).send("something went wrong ! try again");
    }
}