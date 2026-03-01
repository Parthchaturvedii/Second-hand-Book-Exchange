const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  subject: String,
  condition: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  status: {
    type: String,
    default: "available"
  }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
