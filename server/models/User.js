const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      allowNull: false,
    },
  },
});

module.exports = User;
