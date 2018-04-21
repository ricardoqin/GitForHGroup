var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send("aaa")
});
router.post('/',function(req,res){
	if(req.session.userlogin){
		res.send("/userInfo")
	}
})

module.exports = router;
