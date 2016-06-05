var express = require('express');
var router = express.Router();
var dataSet = require('../data/filmlist.data');
router.get('/', function(req, res, next){
    res.send('while(1);' + JSON.stringify(dataSet));
});

module.exports = router;