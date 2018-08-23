var express = require('express');
var router = express.Router();
const xss = require('xss');
const bcrypt = require('bcrypt');
const saltRounds = 16;
let userData = require('../data/model').User;
let responseClient = require('./utils').responseClient;


/* GET users listing. */

router.post('/login', async function(req, res) {
  try {    
    const username = xss(req.body.username);
    const password = xss(req.body.password);
    if (!username) {
      responseClient(res, 400, 2, "Invalid Username");
      return;
    }
    if (!password) {
      responseClient(res, 400, 2, "Invalid Password");
      return;
    }
    let userInfo = await userData.findOne({username}); //: bcrypt.hash(password, saltRounds)});
    if (userInfo) {
      if (await bcrypt.compare(password, userInfo.password)) {
        req.session.userInfo = userInfo;
        console.log(userInfo);
        responseClient(res, 200, 0, `${userInfo.username} successfuly logined`);
        return;
      }
    }
    responseClient(res, 400, 1, "Wrong username or password");
  } catch(e) {
    console.log(e);
  }
});

router.post('/register', async function(req, res) {
  try {
    const username = xss(req.body.username);
    const password = xss(req.body.password);
    const confirm = xss(req.body.confirm);
    const email = xss(req.body.email);
    const firstname = xss(req.body.firstname);
    const lastname = xss(req.body.lastname);
    const question = xss(req.body.question);
    const answer = xss(req.body.answer);
    console.log(bcrypt.hash(password, saltRounds));
    if (await userData.findOne({username})) {
      responseClient(res, 200, 1, "The username existed");
      return;
    }
    let user = new userData({
      username, 
      password: await bcrypt.hash(password, saltRounds),
      confirm,
      email,
      firstname,
      lastname,
      question,
      answer,
      signup_time: Date.now()
    });
    console.log(username);
    await user.save();
    let userInfo = await userData.findOne({username});
    responseClient(res, 200, 0, `${userInfo.username} successfuly signup`, userInfo);
  } catch (e) {
    console.log(e);
  }
})

router.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/');
})


module.exports = router;
