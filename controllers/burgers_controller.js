var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var data = { burgers: data };
        console.log(data);
        res.render("index", data);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create(req.body.name, function (data) {
        res.json(data);
    });
});

router.put("/api/burger/:id", function (req, res) {
    burger.update(req.body.id, function (data) {
        res.json(data);
    });
});

module.exports = router;