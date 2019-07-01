var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObj = {
            burgers: data
        };
        res.render("index", handlebarsObj);
    })
})

router.post("/api/burgers", function (req, res) {
    burger.insertOne(function (data) {

    })
})

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(function (data) {

    })
})

module.exports = router;