var path = require("path");

var isAuthenticated = require("../config/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/sign-up", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/sign-up.html"));
  });

  app.get("/service", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/service.html"));
  });

  app.get("/404", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
  app.get("/petsignup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pets.html"))
  })
};
