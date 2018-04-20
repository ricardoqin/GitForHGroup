<template>
  <div id="app">
<<<<<<< HEAD
    <router-view/>
    <div class="bottomBar">
			<ul>
				<li @click="jumpHome"><a href="javaScript:;"><img src="./assets/HomeImg/home.png" /><span>首页</span></a></li>
				<li @click="jumpSortList"><a href="javaScript:;"><img src="./assets/HomeImg/category.png" /><span>分类</span></a></li>
				<li @click="jumpCart"><a href="javaScript:;"><img src="./assets/HomeImg/buy.png" /><span>购物车</span></a></li>
				<li ><a href="javaScript:;"><img src="./assets/HomeImg/message.png" /><span>消息</span></a></li>
				<li @click="jumpLoginRegister"><a href="javaScript:;"><img src="./assets/HomeImg/me.png" /><span>我</span></a></li>				
			</ul>
		</div>
=======
    <router-view></router-view>
>>>>>>> c8ff38d423cead3c78364ec852aa46fd4ae4c512
  </div>
</template>

<script>
	import router from "./router/index"
import axios from 'axios';
export default {
  name: 'App',
	  data(){
	  	return{
	  		
	  	}
	  },
  	methods:{
  		jumpHome(){//跳首页
  			router.push("/home");	
  		},
  		jumpSortList(){//跳列表页
  			router.push("/sortlist");	
  		},
  		jumpCart(){//跳购物车，需要判断是否登陆，登陆之后就会跳进去
  			router.push("/cart");	
  		},
  		jumpLoginRegister(){//点击我的，也需要判断是否登陆，登陆之后就会显示登陆之后的页面
			axios.post('/isonline',{}).then((res)=>{
				console.log(res.data,"aaa");
				if(res.data){
					this.$router.push(res.data);
				}else{
					this.$router.push("./login");
				}
			}).catch((err)=>{
				console.log(err)
			})
//			router.push("/login");
  		}
  	}
}
document.documentElement.style.fontSize=window.innerWidth/750*100+'px'
</script>

<<<<<<< HEAD
<style lang="scss" >
	.bottomBar{
	width: 7.5rem;
    height: 0.88rem;
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    z-index: 999;
    margin-top: 10px;
	ul{
		width: 100%;
    		height: 100%;
		li{
			float: left;
			width: 20%;
			height: 100%;
		    font-size: 0rem;
		    color: #000;
		    text-align: center;
		    img{
		    	display: block;
		    width: 0.46rem;
		    margin-right: auto;
		    margin-left: auto;
		    }
		    span{
		    		font-size: 0.2rem;
    				display: block;
		    }
		}
	}
=======
<style>
body,p,h1,h2,h3,h4,h5,h6,ul,li,dl,dt,dd,input,form{
  margin:0;
  padding:0;

}
body,html{
  width:100%;
  height:100%;
>>>>>>> c8ff38d423cead3c78364ec852aa46fd4ae4c512
}
html{
	font-size: 50px;
}
html,body,p,ul,li,input,a,div,ol,textarea,select,button,img,form,h1,h2,h3,h4,h5,h6{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
	font-family: 'Microsoft YaHei', Tahoma, Arial, sans-serif;
	color: #000000;
}
img{
	display: block;
	border: none;
}
<<<<<<< HEAD
li{
	list-style: none;
=======
input{
  border:none;
>>>>>>> c8ff38d423cead3c78364ec852aa46fd4ae4c512
}


</style>
