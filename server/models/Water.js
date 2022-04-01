const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const waterSchema = new Schema({
  Brand: [
    {
      type: String,
    },
  ],
  source: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  TDS: {
    type: String,
    required: true,
  }, 
  Price: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
  }
   
});

module.exports = waterSchema;