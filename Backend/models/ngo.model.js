const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const NgoSchema = new mongoose.Schema({
    ngoname : String,
      location: String,
      selectedNgoType: String,
      fileName: String,
       pin: String,
       email: String,
       password: String
      
  });

NgoSchema.methods.matchPassword = async function(password) {
    console.log(password,this.password);
    return await bcrypt.compare(password,this.password);
};

NgoSchema.methods.generateToken = function () {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in environment variables!');
  }

  const token = jwt.sign(
    { id: this._id },  // Payload
    jwtSecret,         // Secret key
    { expiresIn: '1h' } // Expiration time
  );
  return token;
};

const Ngo = mongoose.model('Ngo',NgoSchema);
module.exports = Ngo;

