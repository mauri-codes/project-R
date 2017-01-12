var express = require("express");
var path = require("path");
var User = require("../models/user");

var router = express.Router();

router.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash("error");
    res.locals.infos = req.flash("info");
    next();
});

router.get("/", function (req, res) {
    res.json({"test": "successful"});
});
router.get('/getusers', function (req, res) {
    User.find().exec(function (err, user) {
        if(err){ }
        res.json(user);
    });
});

module.exports = router;