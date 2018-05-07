const Image = require('../models/imageModel');

const imageController = {
  getAll: async (req, res) => {
    try {
      const images = await Image.find();
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(images);
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const image = await Image.findById(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(image);
  },

  create: async (req, res) => {
    const { title, description, url } = req.body;

    const image = new Image({ title, description, url });

    try {
      await image.save();
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(image);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;

    try {
      const image = await Image.findByIdAndUpdate(id, {
        title,
        description,
        url
      });
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(image);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const image = await Image.findByIdAndRemove(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(image);
  }
};

module.exports = imageController;
