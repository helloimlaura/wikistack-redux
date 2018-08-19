const Sequelize = require('sequelize');
const db = require('./db');
const Page = require('./Page');
const User = require('./User');

Page.belongsTo(User, { as: 'author' });

module.exports = {
  db,
  Page,
  User,
};
