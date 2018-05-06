const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
