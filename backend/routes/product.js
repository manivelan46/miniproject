const express = require("express");
const {
  getProducts,
  getsingleProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/product/:id").get(getsingleProduct);

module.exports = router;
