const { profile } = require('console');
const express = require('express');
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/auth/google", passport.authenticate(
  "google",
  {
    scope: ["profile", "email"],
  }
));

router.get("/oauth2callback", passport.authenticate(
  "google",
  {
    successRedirect: "/movies",
    failureRedirect: "/movies"
  }
));

module.exports = router;