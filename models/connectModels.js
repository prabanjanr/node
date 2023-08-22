const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqired: [true, "please contact name"],
    },
    email: {
      type: String,
      reqired: [true, "please contact email"],
    },
    phoneno: {
      type: String,
      reqired: [true, "please contact phoneno"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
