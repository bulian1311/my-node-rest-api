const Product = require('../models/productModel');

const productController = {
  getAll: async (req, res) => {
    const products = await Product.find();

    return res.status(200).json(products);
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);
      return res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: 'No valid entry found for provided ID' });
    }
  },

  create: async (req, res) => {
    const { title, description } = req.body;
    const product = new Product({ title, description });

    try {
      await product.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      const product = await Product.findByIdAndUpdate(id, {
        title,
        description
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndRemove(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = productController;
