const express = require('express');
const router = express.Router();
const passport = require('passport');

// import models
const { user } = require('../models');

router.get('/signup', (req, res) => {
  return res.render('auth/signup');
});

router.get('/login', (req, res) => {
  return res.render('auth/login');
});

router.get('/logout', (req, res) => {
  req.logOut();
  req.flash('success', 'Logging out... See you next time!');
  res.redirect('/auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back...',
  failureFlash: 'Either email or password is incorrect'
}));

router.post('/signup', async (req, res) => {
  console.log(req.body);
  const { email, name, password } = req.body;
  try {
    const [newUser, created] = await user.findOrCreate({
      where: { email },
      defaults: { name, password }
    });

    if (created) {
      console.log(`----- ${newUser.name} was created -----`);
      req.flash('success', `Welcome ${newUser.name}. Account was created and logging in...`);
      res.redirect('/');
    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  } catch (error) {
    console.log('**************Error');
    console.log(error);
    req.flash('error', 'Either email or password is incorrect. Please try again.');
    res.redirect('/auth/signup');
  }
});

module.exports = router;
