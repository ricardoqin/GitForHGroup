var express = require('express');
var router = express.Router();
var usermodel = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var list = [1,2,3,4]
  res.send(list);
});
router.post('/', function(req, res, next) {
   	var isrepet = false;
    usermodel.find({
    	mobileNumber:req.body.telnum,
		password:req.body.pwdstr
    	
    },function(err,data){
    	if(data.length == 0){
//  		res.send(data)
			usermodel.create({
				mobileNumber:req.body.telnum,
				password:req.body.pwdstr
			},function(err,data){
				if(!err){
					isrepet = false;
//					res.redirect("/login")
//					res.send(isrepet)
					res.send([isrepet,"/login"])
				}
			})
    	}else{
    		isrepet = true;
    		res.send(isrepet)
    	}
    })
	
//	res.send(req.body.telnum);
});

module.exports = router;

