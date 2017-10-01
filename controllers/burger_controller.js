var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log(JSON.stringify(data, null, 2));
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
    burger.create(
        {burger_name: req.body.burger_name},
        () => res.redirect("/"));
});

router.put("/:id", function (req, res) {
    burger.update(
        req.params.id,
        {devoured: true},
        () => res.redirect("/"));
});

router.delete("/:id", function (req, res) {
    burger.delete(
        req.params.id,
        () => res.redirect("/"));
});

// Export routes for server.js to use.
module.exports = router;
