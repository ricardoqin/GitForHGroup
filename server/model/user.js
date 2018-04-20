var mongoose = require("mongoose");
//步骤：引入mongoose，是为了使用schema
//schema是一个模型，规定了里面的数据类型
//通过mongoose.model方法来操作表
var Schema = mongoose.Schema;
var obj = {
	mobileNumber:Number,
	password:String
}


var model = mongoose.model("user",new Schema(obj));

module.exports = model;
