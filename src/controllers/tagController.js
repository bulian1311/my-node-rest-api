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
  },

  create: async (req, res) => {
    const { title, description } = req.body;
    const tag = new Tag({ title, description });

    try {
      await tag.save();
    } catch (err) {
      res.status(400).send(err);
    }

    res.status(200).json(tag);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      const tag = await Tag.findByIdAndUpdate(id, { title, description });
    } catch (err) {
      res.status(400).send(err);
    }

    res.status(200).json(tag);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const tag = Tag.findByIdAndRemove(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(tag);
  }
};

module.exports = tagController;
