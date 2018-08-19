const Sequelize = require('sequelize');
const db = require('./db');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    },
  },
  slug: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
    },
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      allowNull: false,
    },
  },
  status: Sequelize.ENUM('open', 'closed'),
});

module.exports = Page;
