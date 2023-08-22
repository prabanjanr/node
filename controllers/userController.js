const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("mandatory");
  }
  const ua = await User.findOne({ email });
  if (ua) {
    res.status(400);
    throw new Error("already registerd");
  }

  // const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword);

  const user = await User.create({
    username,
    email,
    password,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new error("not valid");
  }
  res.json({ message: "register the use" });
});

const loginUser = asyncHandler(async (req, res) => {
  const {email,password}=req.body;
  if(!email || !password){
    req.statusCode(400);
  }
  res.json({ message: "login the use" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current the use" });
});

module.exports = { registerUser, loginUser, currentUser };
