var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
	var list = [1,2,3,4]
  res.send(list);
});
router.post('/',function(req,res){
	if(req.session.userlogin){
		console.log(req.session.userlogin)
		res.send("/userInfo");
	}else{
		res.send(false)
	}
})

module.exports = router;
