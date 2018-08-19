const Sequelize = require('sequelize');
const db = require('./db');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: Sequelize.ENUM('open', 'closed'),
});

function generateSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

Page.beforeValidate(userInstance => {
  userInstance.slug = generateSlug(userInstance.title);
});

module.exports = Page;
