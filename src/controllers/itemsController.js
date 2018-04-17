const Item = require('../models/itemsModel');

const itemsController = {
  getAll: async (req, res) => {
    const items = await Item.find();

    if (!items) {
      return res.status(404).json({ message: 'Not found' });
    }

    return res.status(200).json(items);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ message: 'Not found' });
    }

    return res.status(200).json(item);
  }
};

module.exports = itemsController;
