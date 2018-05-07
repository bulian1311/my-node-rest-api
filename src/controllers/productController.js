const Product = require('../models/productModel');

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
    } catch (err) {
      res.status(400).send(err);
    }

    return res.status(200).json(products);
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);
      return res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  create: async (req, res) => {
    const { title, description, url, company, tags, images } = req.body;

    const product = new Product({ title, description, url });

    try {
      await product.save();
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(product);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      const product = await Product.findByIdAndUpdate(id, {
        title,
        description
      });
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(product);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndRemove(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(product);
  }
};

module.exports = productController;
