const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },

  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Tag', tagSchema);
