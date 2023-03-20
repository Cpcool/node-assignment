const router = require("express").Router();
const { authenticate, authorize } = require('../middlewares/');
const productRoute = require("./product.route");
const authRoute = require("./auth.route");

module.exports = (app) => {
    app.use("/auth", authRoute);
    app.use("/product", productRoute);
}
