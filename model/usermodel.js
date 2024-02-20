const mongoose = require("mongoose");

//thise is model file for creating a schema, schema is like we can define data type which data we want to store as particular data type in database 

const userschema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userschema); //export this schema 
