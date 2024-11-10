import mongoose from "mongoose"
import bcrypt from "bcrypt"
const userschema = new mongoose.Schema({
    username: String,
    email :String,
    password :String
});

userschema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
    next();
  });
  
  module.exports = mongoose.model('user', userschema);
