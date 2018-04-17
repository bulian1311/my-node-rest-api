//const Provider = require('../models/provider');

const providerController = {
  getAll: async (req, res) => {
    const providers = await Provider.findAll();

    if (!providers) {
      return res.status(404).json({ message: 'Not found' });
    }

    return res.status(200).json(providers);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const provider = await Provider.findById(id);

    if (!provider) {
      return res.status(404).json({ message: 'Not found' });
    }

    return res.status(200).json(provider);
  }
};

module.exports = providerController;
