var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send(JSON.stringify({
        title:'curator data service'
    }));
});

module.exports = router;