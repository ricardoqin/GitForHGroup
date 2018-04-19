var express = require('express');
var router = express.Router();
var usermodel = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var list = [1,2,3,4]
  res.send(list);
});
router.post('/', function(req, res, next) {
	var isright = false;
	usermodel.find({
		mobileNumber:req.body.telnum,
		password:req.body.pwdstr
	},function(err,data){
		if(!err){
			if(data.length == 0){
				isright = false;
				res.send(isright);
			}else{
				isright = true;
				res.send(isright);
			}
		}
	})
});

module.exports = router;
