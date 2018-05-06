const Tag = require('../models/tagModel');

const tagController = {
  getAll: async (req, res) => {
    try {
      const tags = await Tag.find();
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(tags);
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const tag = await Tag.findById(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(tag);
  }
};

module.exports = tagController;
