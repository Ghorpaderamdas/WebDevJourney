const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // "required" instead of "require"
    trim: true,
  },
  email: {
    type: String,
    required: true, // "required" instead of "require"
    trim: true,
  },
  password: {
    type: String,
    required: true, // "required" instead of "require"
  },
  role: {
    type: String,
    enum: ["Admin", "Student", "Visitor"],
  },
});

module.exports = mongoose.model("User", userSchema);
