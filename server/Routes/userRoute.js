const express = require("express");
const {
  users,
  LoginUser,
  SignInUser,
  getAllUsers,
} = require("../Controllers/userController");

const userRoute = express.Router();

userRoute.get("/user", users);
userRoute.post("/signin", SignInUser);
userRoute.post("/login", LoginUser);
userRoute.post("/allusers", getAllUsers);

module.exports = userRoute;
