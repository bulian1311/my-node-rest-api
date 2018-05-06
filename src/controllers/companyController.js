const Company = require('../models/companyModel');

const companyController = {
  getAll: async (req, res) => {
    try {
      const companies = await Company.find();
    } catch (err) {
      res.status(400).send(err);
    }

    return res.status(200).json(companies);
  },
  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const company = await Company.findById(id);
    } catch (err) {
      res.status(400).send(err);
    }
    res.status(200).json(company);
  }
};

module.exports = companyController;
