const mongoose = require("mongoose");

const adminCredential = new mongoose.Schema({
  loginid: {
    type:  Number, String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Admin Credential", adminCredential);
