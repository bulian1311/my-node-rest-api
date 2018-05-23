const Product = require('../models/productModel');
const Company = require('../models/companyModel');
const Tag = require('../models/tagModel');
const Image = require('../models/imageModel');

const botController = {
  create: async (req, res) => {
    const { title, description, url, price, company, tags, images } = req.body;

    res.send({ message: 'Hello' });
  }
};

module.exports = botController;
