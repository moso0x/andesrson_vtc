const mongoose = require("mongoose");

const facultyCredential = new mongoose.Schema({
  loginid: {
   type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Faculty Credential", facultyCredential);
