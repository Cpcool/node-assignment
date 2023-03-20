const router = require("express").Router();
const { authenticate, authorize } = require("../middlewares");
const productController = require("../src/products");

router.use(authenticate, authorize);
router.post("/", productController.create);
router.get("/", productController.list);
router.put("/", productController.update);
router.patch("/", productController.update);
router.delete("/", productController.delete);

module.exports = router;
