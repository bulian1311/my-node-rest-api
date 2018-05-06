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
      const image = Image.findById(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(image);
  }
};

module.exports = imageController;
