const router = require("express").Router();
const authController = require("../src/auth");

router.post("/login", authController.login);
router.get("/register", authController.signUp);

module.exports = router;