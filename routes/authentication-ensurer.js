'use strict';

function ensure(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login?form=' + req.originalUrl);
}

module.exports = ensure;
