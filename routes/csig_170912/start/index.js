var app = require('express').Router();

app.get('/', function (req, res, next) {
    res.render('./csig_170912/start');
});

module.exports = app;
