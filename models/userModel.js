const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "add the user"],
    },
    email: {
      type: String,
      required: [true, "add the email"],
      unique: [true, "email id alresdy registerd"],
    },
    password: {
      type: String,
      required: [true, "add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
