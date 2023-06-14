const passport = require('passport');

function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash('error', 'You must be signed in to access this page');
    res.redirect('/auth/login');
  } else {
    next();
  }
}

module.exports = isLoggedIn;
