const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
