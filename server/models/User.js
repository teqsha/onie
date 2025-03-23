const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, unique: true },
  profilePic: { type: String },
});

module.exports = mongoose.model("User", userSchema);
