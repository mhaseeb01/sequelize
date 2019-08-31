var express = require("express");
var router = express.Router();

// Model burger
let db = require("../models");

// GET
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(burgers) {
      res.render("index", { burger: burgers });
    });
});

// POST
router.post("/", function(req, res) {

  db.burger.create({
    burger_name: req.body.burger_name
  })
    .then(function() {
      return res.redirect("/");
  });
  
});

// PUT
router.put("/", function(req, res) {
  // UPDATE devoured to true
  db.burger.update(
    {
     devoured: true
    },
    {
     where: {
       id: req.body.id
     }
    }).then(function() {
      return res.redirect("/");
    });
  });

module.exports = router;