const Image = require('../models/imageModel');

const imageController = {
  getAll: async (req, res) => {
    try {
      const images = await Image.find();
      res.status(200).json(images);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const image = await Image.findById(id);
      res.status(200).json(image);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  create: async (req, res) => {
    const { title, description, url } = req.body;

    const image = new Image({ title, description, url });

    try {
      await image.save();
      res.status(200).json(image);
    } catch (err) {
      res.status(400).send(err);
    }
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
      res.status(200).json(image);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const image = await Image.findByIdAndRemove(id);
      res.status(200).json(image);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = imageController;
