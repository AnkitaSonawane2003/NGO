const mongoose = require('mongoose');

// Admin Schema
const adminSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, // Email should be case insensitive
      trim: true // Trims leading/trailing spaces
    },
    password: { 
      type: String, 
      required: true 
    },
  },
  { collection: 'admin' }  // Ensure the collection name is explicitly set if necessary
);

// Method to check password (since it's not hashed)
adminSchema.methods.matchPassword = function (enteredPassword) {
  return enteredPassword === this.password; // Direct comparison, no hashing
};

// Create and export the model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

