const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
    default: {},
  },
});

const UserSchema = mongoose.model("users", user);

module.exports = UserSchema;
