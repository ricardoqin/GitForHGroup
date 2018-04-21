<template>
	
</template>

<script>

export default {
  data () {
    return {
		checkCode:'',
		telNum:"",
		pwdStr:"",
		picStr:"",
		checkCode:"",
		err:false,
		errmsg:"",
		isCheck:false,
		isTel:false,
		isPwd:false
    }
  },
  methods:{
  	createCode(){
           var code = "";    
          var codeLength = 4;//验证码的长度   
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',   
           'S','T','U','V','W','X','Y','Z');//随机数   
          for(var i = 0; i < codeLength; i++) {//循环操作   
              var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）   
              code += random[index];//根据索引取得随机数加到code上   
          }   
              this.checkCode = code;//把code值赋给验证码   
     },
      changeCheck(){
      	if(this.picStr.toUpperCase() == this.checkCode){
      		this.err = false;
      		this.isCheck = true;
      	}else{
      		this.errmsg = "请输入正确的验证码";
      		this.err = true;
      		this.isCheck = false;
      	}
      },
      telCheck(){
      	var telreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
      	if(telreg.test(this.telNum)){
      		console.log("成功");
      		this.err = false;
      		this.isTel = true;
      	}else{
      		this.isTel=false;
      		this.errmsg = "请输入正确的手机号";
      		this.err = true;
      		console.log("手机验证失败")
      	}
      },
      pwdCheck(){
      	
      	var pwdreg = /^[0-9a-zA-Z_]{6,12}$/;2
      	if(pwdreg.test(this.pwdStr)){
      		this.err = false;
      		this.isPwd = true;
      	}else{
      		this.isPwd = false;
      		this.err = true;
      		this.errmsg = "请输入6-12位数字、字母组成的密码"
      	}
      },
      registerBtn:function(){
      	if(this.isCheck==true&&this.isTel ==true&&this.isPwd == true){
      		var telnum = this.telNum;
	      	var pwdstr = this.pwdStr;
			axios.post('/registerreq',{
				telnum,
				pwdstr
		  }).then((res)=>{
		  	console.log(res.data)
		  		if(res.data[0] == false){
	  				this.err = true;
	  				this.errmsg = "注册成 功！即将跳转到登录页面";
	  				setTimeout(()=>{this.$router.push(res.data[1])},1000)
//	  				this.$router.push(res.data[1])
		  		}else{
		  			this.err = true;
		  			this.errmsg = "该手机号已注册，请直接登录";
//		  			console.log(this);
		  		}
		  	}).catch(function(err){
		  		console.log(err);
		  	})
      	}else{
      		this.err = true;
      		this.errmsg = "请输入正确的手机号或验证码或密码"
      	}
      	
      }
  },
   created(){
        this.createCode();
    }
  }
}
</script>

<style lang="scss" scoped>
header{
	background: #FFFFFF;
	height: 0.88rem;
	line-height: 0.88rem;
	padding: 0rem 0.2rem;
	border-bottom: 1px solid #F5F5F5;
	position: relative;
	
	h3{
		display: block;
		font-size: 0.34rem;
		margin: 0;
		padding: 0;
		text-align: center;
	}
	.header-right{
		position: absolute;
		right: 0.2rem;
		font-size: 0.3rem;
		line-height: 0.88rem;
		top: 0;
	}
}
.formebox{
	position: relative;
	width: 6.9rem;
	height: 4.2rem;
	margin: 0 auto;
	
	
	.errmsg{
		height:0.5rem;
		
		span{
			font-size: 0.28rem;
			color: orangered;
			float: left;
			margin-left: 0.3rem;
		}
	}
	
	ul{
		padding: 0 0.3rem;
		background: #FFFFFF;
		color: #000000;
		a{
			display: inline-block;
			float: left;
			font-size: 0.28rem;
			color: #2c3030;
			height: 1rem;
			line-height: 1rem;
		}
		li{
			height: 1rem;
			display: block;
			margin: 2px 0px;
			input{
				float: left;
				width: 100%;
				height: 1rem;
				line-height: 1rem;
				font-size: 0.28rem;
				color: #000000;
				outline: none;
				padding: 1px 0;
			}
			#inputCode{
				width: 50%;
			}
			#code{
				width: 25%;
			}
		}
		li:first-child{
			padding: 1px 0;
			border-bottom: 1px solid #000000;
		}
	}
	
	button{
		margin: 0 auto;
		vertical-align: middle;
		width: 6.9rem;
		height: 0.88rem;
		background: #FFD444;
		font-size: 0.28rem;
		border: 0;
		margin-top: 1rem;
	}
}

#code{
    font-size: 18px;
    letter-spacing:3px;
    color: #053d84;
    background: #f2f2f5;
}
.verification1{
    vertical-align: middle;
    transform: translate(-15px,0);
    width: 102px;
}
</style>