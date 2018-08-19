const sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const { addPage, wikipage, main } = require('../../views/');
const { Page, User } = require('../models');

router.get('/', async (req, res, next) => {
  const allPages = await Page.findAll();
  res.send(main(allPages));
});

router.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
  });

  try {
    const [user] = await User.findOrCreate({
      where: {
        name: req.body.author,
        email: req.body.email,
      },
    });
    await page.save();
    await page.setAuthor(user.id);
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });

    const author = await page.getAuthor();
    // console.log('AUTHOR => ', author);

    res.send(wikipage(page, author));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
