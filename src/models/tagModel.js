const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Tag', tagSchema);
