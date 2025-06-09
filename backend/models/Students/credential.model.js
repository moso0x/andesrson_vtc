const mongoose = require("mongoose");

const studentCredential = new mongoose.Schema({
  loginid: {
     type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Student Credential", studentCredential);
