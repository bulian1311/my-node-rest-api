const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

const userController = {
  signup: async (req, res) => {
    const { email, password } = req.body;

    const existUser = await User.findOne({ where: { email } });

    if (existUser) {
      throw new Error('Email already used');
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({ email, password: hash });

    const user = await User.findOne({ email });

    return res.status(200).json({ message: 'Signup success', user });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: 'invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(401).json({ message: 'invalid email or password' });
    }
    const token = await jwt.sign({ id: user.id }, CONFIG.jwt_secret);

    res.status(200).json({ message: 'Login success', token });
  }
};

module.exports = userController;
