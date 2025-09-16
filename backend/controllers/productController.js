const productModel = require("../models/productModel");

//get products api-/api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find({});

  res.json({
    sucess: true,
    products,
  });
};

//get singleproduct api-/api/v1/product/:id
exports.getsingleProduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);

    res.json({
      sucess: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: error.message,
    });
  }
};
