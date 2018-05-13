const Product = require('../models/productModel');
const Company = require('../models/companyModel');
const Tag = require('../models/tagModel');
const Image = require('../models/imageModel');

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  create: async (req, res) => {
    const { title, description, url, companyId, tagsId, imagesId } = req.body;

    const product = new Product({ title, description, url });

    try {
      await productController._companyPopulate(companyId, product);
      await productController._tagsPopulate(tagsId, product);
      await productController._imagesPopulate(imagesId, product);
    } catch (err) {
      res.status(400).send(err);
    }

    res.status(200).json(product);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, description, url, company, tags, images } = req.body;

    try {
      const product = await Product.findByIdAndUpdate(id, {
        title,
        description,
        url
      });

      await productController._companyPopulate(company, product);
      await productController._tagsPopulate(tags, product);
      await productController._imagesPopulate(images, product);

      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndRemove(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getTags: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id).populate('tags');
      res.status(200).json(product.tags);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getCompany: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id).populate('company');

      res.status(200).json(product.company);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  getImages: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id).populate('images');
      res.status(200).json(product.images);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  _companyPopulate: async (companyId, product) => {
    const company = await Company.findById(companyId);
    product.company = company;
    company.products.push(product);

    await product.save();
    await company.save();
  },

  _tagsPopulate: async (tagsId, product) => {
    for (let i = 0; i < tagsId.length; i++) {
      const tagId = tagsId[i];
      const tag = await Tag.findById(tagId);
      product.tags.push(tag);
      tag.products.push(product);

      await product.save();
      await tag.save();
    }
  },

  _imagesPopulate: async (imagesId, product) => {
    for (let i = 0; i < imagesId.length; i++) {
      const imageId = imagesId[i];
      const image = await Image.findById(imageId);
      product.images.push(image);

      await product.save();
    }
  }
};

module.exports = productController;
