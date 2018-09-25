const db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Get all examples
  app.get("/api/sign-up", function (req, res) {
    res.json("user-info");
  });

  app.post('/api/login',
    passport.authenticate('local'), function (req, res) {
      res.json('/services');
    });

  app.get('/api/login',
    passport.authenticate('provider', {
      successRedirect: '/services',
      failureRedirect: '/login'
    }));

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/index");
  });

  app.post("/api/sign-up", function (req, res) {
    db.User.create({
      user_email: req.body.user_email,
      user_password: req.body.user_password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      home_address_1: req.body.home_address_1,
      home_address_2: req.body.home_address_2,
      home_city: req.body.home_city,
      home_state: req.body.home_state,
      home_zipcode: req.body.home_zipcode,
      credit_numb: req.body.credit_numb,
    })
      .then(function () {
        res.json({ "msg": "Your user info is saved" });
      });
  });

  app.post("/api/pets", function (req, res) {
    db.Pets.create({
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      pet_breed: req.body.pet_breed,
      pet_picture_url: req.body.pet_picture_url,
      service_animal: req.body.service_animal,

    }).then(function (results) {
      console.log(results);
    });
  });
};
