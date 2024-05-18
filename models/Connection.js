const mongoose = require('mongoose');
const connectionSchema = new mongoose.Schema({
  studentId: String,
  fullName: String,
  phoneNumber: String,
  email: String,
});

module.exports = mongoose.model('Connection', connectionSchema);
