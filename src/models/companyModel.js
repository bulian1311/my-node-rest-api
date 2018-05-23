const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = Schema({
  name: { type: String, required: true, unique: true },
  url: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },

  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Company', companySchema);
