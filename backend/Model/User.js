const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // username is optional, but if present it must be unique (sparse index)
  username: { type: String, index: { unique: true, sparse: true } },

  // email is required and unique
  email: { type: String, required: true, unique: true },

  // store hashed password
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
