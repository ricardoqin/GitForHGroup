<template>
	<div>
		<header>
			<h3>我</h3>
		</header>
		<div class="userbox">
			<img src="../assets/default_portrait.png"/>
			<div class="usernamebox">
				<p>{{fullname}}</p>
			</div>
			<i class="iconfont icon-more"></i>
		</div>
		<div class="orderbox">
			<div class="orderbox-title">
				全部订单
			</div>
			<ul>
				<li>
					<img src="../assets/userInfoImg/waite-pay.png"/>
					<div>
						<p>待付款<i class="iconfont icon-more"></i></p>
						
					</div>
				</li>
				<li>
					<img src="../assets/userInfoImg/waite-pay.png"/>
					<div>
						<p>待发货<i class="iconfont icon-more"></i></p>
						
					</div>
				</li>
				<li>
					<img src="../assets/userInfoImg/waite-pay.png"/>
					<div>
						<p>待收货<i class="iconfont icon-more"></i></p>
						
					</div>
				</li>
				<li>
					<img src="../assets/userInfoImg/waite-pay.png"/>
					<div>
						<p>待评论<i class="iconfont icon-more"></i></p>
						
					</div>
				</li>
				<li>
					<img src="../assets/userInfoImg/waite-pay.png"/>
					<div>
						<p>退换货<i class="iconfont icon-more"></i></p>
						
					</div>
				</li>
			</ul>
		</div>
		<div class="otherbox">
			<ul>
				<li>
					<div>
						<p>我的收藏</p>
						
					</div>
					<i class="iconfont icon-more"></i>
				</li>
				<li>
					<div>
						<p>我的礼券</p>
						
					</div>
					<i class="iconfont icon-more"></i>
				</li>
				<li>
					<div>
						<p>客服电话</p>
						
					</div>
					<i class="iconfont icon-more"></i>
				</li>
			</ul>
		</div>
		<button class="exit" @click="DestroyCookie">注销</button>
		
	</div>
</template>

<script>
	import axios from "axios";
	import router from "../router";
export default {

  name: 'home',

  data () {
    return {
		fullname:""
    }
  },
  methods:{
  	DestroyCookie(){
		axios.post("/isonline",{
			isDestroy:true
		}).then((res)=>{
		alert("注销成功，即将跳转回首页")
		setTimeout(()=>{router.push(res.data)},1000)
	  	}).catch((err)=>{
	  		console.log(err)
	  	})
  	}
  },
  beforeCreate(){
  	axios.post("/userInfoBK").then((res)=>{
  		if(res.data[0]){
  			this.fullname = res.data[1];
  			router.push(res.data[0]);
  		}else{
  			router.push(res.data)
  		}
  	}).catch((err)=>{
  		console.log(err)
  	})
  }

  
}
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
body{
	font-size: 0.32rem;
}
div{
	background: #EAEAEA;
}
header{
	background: #FFFFFF;
	height: 0.88rem;
	line-height: 0.88rem;
	position: relative;
	padding: 0rem 0.2rem 0rem 0.2rem;
	border-bottom: 1px solid #F5F5F5;
	
	h3{
		font-size: 0.34rem;
		position: absolute;
		left: 50%;
	}
}

.userbox{
	width: 100%;
	height: 1.4rem;
	background: #FFFFFF;
	margin: 0.3rem 0;
	position: relative; 
	
	img{
		float: left;
		display: inline-block;
		vertical-align: middle;
		width: 1rem;
		height: 1rem;
		margin: 0.2rem 0.3rem;
		border: 0;
	}
	i{
		float: right;
		line-height: 1.4rem;
		font-size: 0.46rem;
		margin-right: 0.2rem;
	}
	.usernamebox{
			float: left;
		
		p{
			height: 1.4rem;
			line-height: 1.4rem;
			font-size: 0.34rem;
			overflow: hidden;
			background: #FFFFFF;
		}
		
	}
}
.orderbox{
	width: 100%;
	background: #FFFFFF;
	padding-left: 0.3rem;
	margin-bottom: 0.3rem;
	
	.orderbox-title{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		color: #000000;
		border-bottom: 1px solid #EAEAEA;
		font-size: 0.3rem;
		background: #FFFFFF;
	}
	
	ul{
		li{
			img{
				display: inline-block;
				width: 0.48rem;
				height: 0.48rem;
				margin-right: 0.1rem;
			}
			div{
				display: inline-block;
				vertical-align: middle;
				width: 6.51rem;
				height: 1rem;
				line-height: 1rem;
				font-size: 0.26rem;
				color: #4a4a4a;
				border-bottom: 1px solid #EAEAEA;
				background: #FFFFFF;
				
				i{
					display: inline-block;
					float: right;
					margin-right: 0.5rem;
					height: 1rem;
					line-height: 1rem;
					
				}
			}
		}
	}
}

.otherbox{
	/*margin-bottom: 0.89rem;*/
	border-bottom: 0.5rem solid #EAEAEA;
	ul{
		li{
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			border-top: 1px solid #EAEAEA;
			background: #FFFFFF;
			vertical-align: middle;
			
			img{
				display: inline-block;
				float: left;
				display: inline-block;
				width: 0.48rem;
				height: 0.48rem;
				margin-right: 0.1rem;
			}
			div{
				float: left;
				background: #FFFFFF;
				p{
					font-size: 0.3rem;
					color: #000000;
					margin-left: 0.3rem;
					width: 100%;
				}
			}
			i{
				margin-right: 0.4rem;
				float: right;
			}
		}
	}
}

.exit{
	float: left;
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	color: #ff7070;
	text-align: center;
	background: #FFFFFF;
	border: 0;
	margin-bottom: 1rem;
}
</style>