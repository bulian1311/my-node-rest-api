const Product = require('./models/productModel');
const Company = require('./models/companyModel');
const Tag = require('./models/tagModel');
const Image = require('./models/imageModel');
const User = require('./models/userModel');
const bcrypt = require('bcrypt');

module.exports = async () => {
  const product1 = new Product({
    title: 'Product 1',
    description: 'Some description',
    url: 'http://site.com'
  });

  const product2 = new Product({
    title: 'Product 2',
    description: 'Some description',
    url: 'http://site.com'
  });

  const company = new Company({
    title: 'Company 1',
    description: 'Some description',
    url: 'http://site.com'
  });

  const tag = new Tag({
    title: 'Tag 1',
    description: 'Some description'
  });

  const image = new Image({
    title: 'Image 1',
    description: 'Some description',
    url: 'http://site.com'
  });

  try {
    await product1.save();
    await product2.save();
    await company.save();
    await tag.save();
    await image.save();
  } catch (err) {
    console.log(err);
  }

  tag.products.push(product1);
  tag.products.push(product2);
  company.products.push(product1);
  company.products.push(product2);
  product1.images.push(image);
  product1.tags.push(tag);
  product1.company = company;
  product2.images.push(image);
  product2.tags.push(tag);
  product2.company = company;

  const hash = await bcrypt.hash('131187', 10);
  await User.create({ email: 'nikolay1311@yandex.ru', password: hash });

  try {
    await tag.save();
    await company.save();
    await product1.save();
    await product2.save();
  } catch (err) {
    console.log(err);
  }
};
