var express = require('express');
var router = express.Router();
let userData = require('../data/model').User;
let userRoutes = require('./users');

/* GET home page. */
router.get('/', async function(req, res) {
  try {
    const users = await userData.find();
    res.json(todos)
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
