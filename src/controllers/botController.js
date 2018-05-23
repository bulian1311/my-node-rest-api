const Product = require('../models/productModel');
const Company = require('../models/companyModel');
const Tag = require('../models/tagModel');
const Image = require('../models/imageModel');

const botController = {
  create: async (req, res) => {
    const {
      title,
      description,
      url,
      price,
      companyObj,
      tagsArr,
      imagesArr
    } = req.body;

    const product = new Product({
      title,
      description,
      url,
      price
    });

    try {
      company = await botController._companyPopulate(companyObj, product);
    } catch (err) {
      res.send({ message: 'error!!!', err });
    }

    res.send({ message: 'Hello', product, company });
  },

  _companyPopulate: async (companyObj, product) => {
    //const existCompany = await Company.findOne(companyObj);
    //let company;
    //if (existCompany) {
    //company = existCompany;
    //} else {
    //company = new Company(companyObj);
    //}
    //product.company = company;
    //company.products.push(product);
  }
};

module.exports = botController;
