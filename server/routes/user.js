const sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const { userList, userPages } = require('../../views');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    const pages = await Page.findAll({
      where: {
        authorId: id,
      },
    });

    console.log(pages);
    const user = await User.findById(id);

    res.send(userPages(user, pages));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
