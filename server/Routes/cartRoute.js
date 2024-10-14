const express = require("express");
const {
  addToCart,
  RemoveFromCart,
  getCart,
} = require("../Controllers/cartController");
// const authMiddleware = require("../Middleware/auth");

const cartRouter = express.Router();

cartRouter.post("/add", addToCart);
cartRouter.post("/remove", RemoveFromCart);
cartRouter.get("/get", getCart);

module.exports = cartRouter;
