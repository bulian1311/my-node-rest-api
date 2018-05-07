const Tag = require('../models/tagModel');

const tagController = {
  getAll: async (req, res) => {
    try {
      const tags = await Tag.find();
      res.status(200).json(tags);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const tag = await Tag.findById(id);
      res.status(200).json(tag);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  create: async (req, res) => {
    const { title, description } = req.body;
    const tag = new Tag({ title, description });

    try {
      await tag.save();
      res.status(200).json(tag);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      const tag = await Tag.findByIdAndUpdate(id, { title, description });
      res.status(200).json(tag);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const tag = await Tag.findByIdAndRemove(id);
      res.status(200).json(tag);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = tagController;
