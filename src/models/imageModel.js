const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = Schema({
  alt: { type: String },
  url: { type: String, required: true, unique: true },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
