const sequelize = require('sequelize');
const express = require('express');
const router = express.Router();
const { addPage } = require('../../views/');

router.get('/wiki', (req, res, next) => {
  res.send('get wiki pages');
});

router.post('/wiki', (req, res, next) => {
  res.send('submit new page here');
});

router.get('/wiki/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
