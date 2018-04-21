<template>
	<div>
		<header class="header">
			<router-link to="/home" tag="a" class="header-left"><img src="../assets/home-07bdcdd36c9df74ef30110623d2d708b.png"/></router-link>
			<h3>登录</h3>
			<router-link to="register" tag="a" class="header-right">注册</router-link>
		</header>
		<div class="mainbox">
			<ul>
				<!--<li>
					<a href="#"   :class="ischoice?'active':''" @click="handleClick" :key="1">密码登录</a>
				</li>
				<li>
					<a href="#"  :class="ischoice?'active':''" @click="handleClick" :key="2">短信登录</a>
				</li>-->
				<!--<li v-for="data,index in loginway"><a href="#" v-bind:class="{ active: ischoice }"  @click="handleClick">{{data}}</a></li>-->
				<li v-for="data,index in loginway"><a href="#" :class="currentIndex==index?'active':''"  @click="handleClick(index)" :key="index">{{data}}</a></li>
			</ul>
			<div class="pwdlogin" v-show="isShow" :key="0">
				<div class="inputbox">
					<div class="telnamebox">
						<input type="text" v-model="telNum" id="username-pwdlogin"  placeholder="请输入手机号"/>
					</div>
					<div class="pwdbox">
						<input type="password" v-model="pwdStr" class="pwd" id="pwd-pwdlogin" placeholder="请输入密码"/>
						<a href="#">忘记密码？</a>
					</div>
				</div>
				<div class="errmsg">
					<span v-show="err">{{errmsg}}</span>
				</div>
				<button @click="surebtn" class="subbtn">确认</button>
				<div class="foot">
					<ul>
						<li><input type="checkbox" value="" />一个月内记住登录</li>
						<li>快速注册</li>
					</ul>
				</div>
			</div>
			<div class="meglogin" v-show="!isShow" :key="1">
				<div class="inputbox">
					<div class="telnamebox">
						<input type="text" id="username-meglogin"  placeholder="请输入手机号"/>
					</div>
					<div class="pwdbox">
						<input type="password" class="pwd" id="pwd-msglogin" placeholder="请输入验证码"/>
						<a href="#">获取验证码</a>
					</div>
				</div>
				<button @click="surebtn1" class="subbtn">确认</button>
				<div class="foot">
					<ul>
						<li>快速注册</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>	
</div>
</template>

<script>
	import router from "../router/index"
import axios from'axios';
export default {

  name: 'home',

  data () {
    return {

		ischoice:true,
		loginway:["密码登录","短信登录"],
		currentIndex:0,
		isShow:true,
		telNum:"",
		pwdStr:"",
		err:true,
		errmsg:""
    }
  },
  methods:{
  	handleClick:function(index){
		this.currentIndex = index;
//		this.ischoice = !this.ischoice;
		if(this.currentIndex == 0){
			this.isShow = true;
		}
		if(this.currentIndex == 1){
			this.isShow = false;
		}
  	},
//	axios.get("/v4/api/billboard/home?__t=1523895165695").then(res=>{
//				console.log(res.data);
//
//			}).catch(err=>{
//				console.log(err);
//			})
	surebtn:function(){

		let telNum = this.telNum;
		let pwdStr = this.pwdStr; 
		console.log(telNum,pwdStr)
		
		axios.post('/loginreq',{
			telNum,
			pwdStr
	  	}).then((res)=>{
	  		if(res.data == true){
	  			this.err = false;
	  			console.log("登录成功");
	  			setTimeout(()=>{this.$router.push("/userInfo")},1000)
	  		}else{
	  			this.err = true;
	  			this.errmsg = "手机号或密码错误，请重新输入"
	  		}
	  	}).catch(function(err){
	  		console.log(err);
	  	})
	},

	surebtn1:function(){
		console.log("aaa")
	}
  	
  }
}
</script>

<style lang="scss" scoped>
body,div,a,img,h3,header,ul,li,input{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
body{
	font-size: 0.32rem;
	background-color: #f5f5f5;
}
img{
	border: 0;
}
a{
	color: #2c3030;
	text-decoration: none;
}
.header{
	background: #fff;
	height: 0.88rem;
	position: relative;
	padding: 0rem 0.2rem;
	border-bottom: 1px solid #f5f5f5;
	
	.header-left{
		width: 0.64rem;
		height: 0.88rem;
		line-height: 0.88rem;
		position: absolute;
		left: 0.2rem;
		top:0;
		
		img{
			width: 0.52rem;
			margin-top: 0.06rem;
			margin-bottom: 0.06rem;
		}
	}
	
	h3{
		text-align: center;
		font-size: 0.34rem;
		line-height: 0.88rem;
	}
	
	.header-right{
		position: absolute;
		right: 0.2rem;
		font-size: 0.3rem;
		line-height: 0.88rem;
		top: 0;
	}
	
}

.mainbox{
	width: 6.9rem;
	margin: 0 auto;
	background: #fff;
	margin-top: 0.3rem;
	height: 2.9rem;
	
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
		height: 0.88rem;
		line-height: 0.88rem;
		background: #fcfcfc;
		
		li{
			float: left;
			margin: 0 0.92rem;
			font-size: 0.28rem;
			padding: 0 0.24rem;
		}
		.active{
			display: block;
			color: #000;
			height: 0.88rem;
			line-height: 0.88rem;
			border-bottom: 0.06rem solid #202020;
		}
	}
	
	
	.inputbox{
		width: 6.3rem;
		padding: 0 0.3rem;
		background: #FFFFFF;
		margin: 0 auto;
		height: 2rem;
		
		input{
			border: 0;
			width: 100%;
			height: 1rem;
			border-bottom: 1px solid #eaeaea;
			font-size: 0.28rem;
			outline: none;
			float: left;
		}
		
		.pwdbox{
			position: relative;
			.pwd{
				width: 75%;
			}
			a{
				display: block;
				width: 25%;
				height: 1rem;
				font-size: 0.28rem;
				float: right;
				line-height: 1rem;
				border-bottom: 1px solid #eaeaea;
			}
		}
	}
}

.subbtn{
	margin: 0 auto;
	vertical-align: middle;
	width: 6.9rem;
	background: #ffd444;
	font-size: 0.28rem;
	border: 0;
	height: 0.88rem;
}
.foot{
	ul{
		li:first-child{
			float: left;
			margin: 0;
			padding: 0;
		}
		li:last-child{
			float: right;
			margin: 0;
			padding: 0;
		}
	}
}
</style>