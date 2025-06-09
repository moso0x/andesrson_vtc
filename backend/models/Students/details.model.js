const mongoose = require("mongoose");

const studentDetails = new mongoose.Schema({
  enrollmentNo: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9-]+$/, "Enrollment number can only contain letters, numbers, and hyphens"]
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^[0-9\-+() ]+$/, "Phone number can contain digits, spaces, hyphens, parentheses, and plus signs"],
  },
  semester: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  profile: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Student", studentDetails);
