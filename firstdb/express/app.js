const express = require('express');
const app = express();

// server connect
app.listen(5000, () => {
  console.log('server is on 5000');
});

app.get('/', (req, res) => {
  res.send('hello express world');
});

app.post('/about', (req, res) => {
  res.send('we save data');
});

const checkAuth = (req, res, next) => {
  console.log('this is middleware');
  next();
};

const checkToken = (req, res, next) => {
  if (token) {
    console.log('you have token');
    next();
  }
  res.send('you dont have token');
};

const getUser = (req, res) => {
  res.send('here is user info');
};

app.get('/users', checkAuth, checkToken, getUser);
