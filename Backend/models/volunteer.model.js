const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const volunteerSchema = new mongoose.Schema({
    fullname:String,      
    dob: String,
    gender: String,
    address: String,
    phonenumber:String,      
    email: String,
    password:String
    
  });

  volunteerSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  

volunteerSchema.methods.generateToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
};

const Volunteer = mongoose.model('Volunteer',volunteerSchema);
module.exports = Volunteer;

