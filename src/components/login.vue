<template>
	<div>
		<header class="header">
			<router-link to="/home" tag="a" class="header-left"><img src="../assets/home-07bdcdd36c9df74ef30110623d2d708b.png"/></router-link>
			<h3>登录</h3>
			<router-link to="register" tag="a" class="header-right">注册</router-link>
		</header>
		<div class="mainbox">
			<ul>
				<li>
					<a href="#" class="pwd-login" :class="{active:isPwdchoice}" @click="handleClick">密码登录</a>
				</li>
				<li>
					<a href="#" class="msg-login" :class="{active:isMsgchoice}" @click="handleClick">短信登录</a>
				</li>
			</ul>
			<div class="inputbox">
				<div class="telnamebox">
					<input type="text" id="username"  placeholder="请输入手机号"/>
				</div>
				<div class="pwdbox">
					<input type="password" id="pwd" placeholder="请输入密码"/>
					<a href="#">忘记密码？</a>
				</div>
			</div>
		</div>
	</div>	

</template>

<script>
//	import router from "../router/index"
export default {

  name: 'home',

  data () {
    return {
		isPwdchoice:true,
		isMsgchoice:false
    }
  },
  methods:{
  	handleClick:function(){
  		this.isPwdchoice = !this.isPwdchoice;
  		this.isMsgchoice = !this.isMsgchoice;
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
			color: #000;
			height: 0.88rem;
			border-bottom: 0.06rem solid #202020;
		}
	}
	
	
	.inputbox{
		width: 6.9rem;
		padding: 0 0.3rem;
		background: #FFFFFF;
		margin: 0 auto;
		
		
		input{
			border: 0;
			width: 100%;
			height: 1rem;
			border-bottom: 1px solid #eaeaea;
			font-size: 0.28rem;
			outline: none;
		}
		
		.pwdbox{
			position: relative;
			#pwd{
				width: 95%;
			}
			a{
				width: 5%;
				position: absolute;
				
			}
		}
	}
}
</style>