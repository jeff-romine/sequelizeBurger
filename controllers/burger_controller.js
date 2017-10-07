var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (data) {
        var undevouredIndex=1;
        var devouredIndex=1;

        data.forEach((burger) => {
            if (burger.devoured) {
                burger.index = devouredIndex++;
            }
            else {
                burger.index = undevouredIndex++;
            }
        });

        res.render("index", {burgers: data});
    });
});

router.post("/", function (req, res) {

    db.Burger.create({burger_name: req.body.burger_name})
        .then(() => res.redirect("/"));
});

router.put("/:id", function (req, res) {

    db.Burger.update({
        devoured: true
    }, {
        where: {
            id:req.params.id
        }
    }).then(() => res.redirect("/"));
});

router.delete("/:id", function (req, res) {
    burger.delete(
        req.params.id,
        () => res.redirect("/"));
});

// Export routes for server.js to use.
module.exports = router;
