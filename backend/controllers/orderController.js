const orderModel = require("../models/orderModel");

//create order-api/v1/ordre

exports.createOrder = async (req, res, next) => {
  console.log(req.body, "DATA");
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);
  console.log(amount, "AMOUNT");
  const status = "pending";

  const order = await orderModel.create({ cartItems, amount, status });

  res.json({
    sucess: true,
    order,
  });
};
