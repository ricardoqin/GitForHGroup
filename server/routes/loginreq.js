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
		mobileNumber:req.body.telNum,
		password:req.body.pwdStr
	},function(err,data){
		if(!err){
			console.log(data);
			if(data.length == 0){
				isright = false;
				res.send(isright);
			}else{
				req.session.userlogin = data[0];
				isright = true;
				console.log(req.session.userlogin)
				res.send(isright);
			}
		}
	})
});

module.exports = router;
