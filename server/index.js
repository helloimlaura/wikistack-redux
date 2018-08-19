const express = require('express');
const app = express();
const morgan = require('morgan');
const html = require('html-template-tag');
const main = require('../views/main');
const { db, Page, User } = require('./models');
const { wikiRouter, userRouter } = require('./routes');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../' + __dirname + '/public'));

app.use('/wiki', wikiRouter);

app.use('/users', userRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
});

const port = 3000;

db.authenticate().then(() => {
  console.log('connected to the database');
});

const init = async () => {
  await db.sync({ force: false });

  app.listen(port, () => {
    console.log(`Connected on port: ${port}`);
  });
};

init();
