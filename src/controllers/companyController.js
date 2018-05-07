const Company = require('../models/companyModel');

const companyController = {
  getAll: async (req, res) => {
    try {
      const companies = await Company.find();
      res.status(200).json(companies);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const company = await Company.findById(id);
      res.status(200).json(company);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  create: async (req, res) => {
    const { title, description, url } = req.body;

    const company = new Company({ title, description, url });

    try {
      await company.save();
      res.status(200).json(company);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;

    try {
      const company = await Company.findByIdAndUpdate(id, {
        title,
        description,
        url
      });
      res.status(200).json(company);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const company = await Company.findByIdAndRemove(id);
      res.status(200).json(company);
    } catch (err) {
      res.status(400).send(err);
    }
  }
};

module.exports = companyController;
