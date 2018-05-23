const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  url: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },

  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
});

module.exports = mongoose.model('Product', productSchema);
