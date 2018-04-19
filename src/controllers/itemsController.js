const Item = require('../models/itemsModel');

const itemsController = {
  getAll: async (req, res) => {
    const items = await Item.find();

    return res.status(200).json(items);
  },
  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const item = await Item.findById({ _id: id });
    } catch (err) {
      res.status(404).json({ message: 'No valid entry found for provided ID' });
    }

    if (!item) {
      return res.status(404).json({ message: 'Not found' });
    }

    return res.status(200).json(item);
  },
  create: async (req, res) => {
    const { title, description } = req.body;
    const item = new Item({ title, description });

    try {
      await item.save();
      res.status(200).json(item);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
      const item = await Item.findByIdAndUpdate(id, { title, description });
      res.status(200).json(item);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const item = await Item.findByIdAndRemove(id);
      res.status(200).json(item);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = itemsController;
