const UserSchema = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Controller for handling user-related operations.
 */

// Basic response for users endpoint
const users = (req, res) => {
  res.json({ success: true, message: "Users from users controller" });
};

// Function to generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Controller for signing up a new user
const SignInUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User already exists. Please log in.",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserSchema({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = generateToken(user._id);

    if (user) {
      res
        .status(201)
        .json({ success: true, message: "User created successfully", token });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Error while signing up" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Controller for logging in a user
const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserSchema.findOne({ email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found. Please register." });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (isPasswordValid) {
      const token = generateToken(existingUser._id);
      res
        .status(200)
        .json({ success: true, message: "Welcome to CARTZ", token });
    } else {
      res.status(401).json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Controller to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// Exporting all controllers
module.exports = { users, LoginUser, SignInUser, getAllUsers };
