var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var list = [1,2,3,4]
  res.send(list);
});
router.post('/', function(req, res, next) {
	var list = [1,2,3,4]
	console.log(req.body)
  res.send(list);
});

module.exports = router;
