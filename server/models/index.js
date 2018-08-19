const Sequelize = require('sequelize');
const db = require('./db');
const Page = require('./Page');
const User = require('./User');

module.exports = {
  db,
  Page,
  User,
};
