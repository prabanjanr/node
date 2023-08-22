const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);

router.post("/login", loginUser);

router.post("/current", currentUser);

module.exports = router;
