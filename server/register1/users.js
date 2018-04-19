var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
	var list = [1,2,3,4]
  res.send(list);
});

module.exports = router;