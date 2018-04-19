<template>
	<div class="home">
	<!--头部信息 logo 搜索框=============================-->
		<header class="header noborder">
			<!-- <h3>尖叫设计</h3> -->
			<img class="logo" src="../assets/HomeImg/logoImg.png">
			<!--添加搜索框-->
			<div id="searchInfor">
				<img src="../assets/HomeImg/search.png" id="searchIcon">
				<input type="search" name="searchInput" id="searchInput" placeholder="搜索我的尖叫好物">
			</div>
		</header>
		<!--头部信息结束，开始下面的content========================-->
		<div class="tabBox" id="leftTabBox">
			<div class="hdd">
				<ul id="tabUl">
					<!--<li class="active"><a @click="current='recommend'">推荐</a></li>
					<li><a @click="current='furniture'" >家具</a></li>
					<li><a @click="current='houseHome'" >家居</a></li>
					<li><a @click="current='activity'" >活动</a></li>-->
					<li class="active" @click="current='recommend'">推荐</li>
					<li @click="current='furniture'">家具</li>
					<li @click="current='houseHome'">家居</li>
					<li @click="current='activity'">活动</li>
					<!--<li v-for="data,index in titleList" @click="changeStyle(index)" :class=""><a @click="current=index">{{data}}</a></li>-->
				</ul>
				<keep-alive>
					<component :is='current'></component>
				</keep-alive>
			</div>
		</div>
		<backTop></backTop>
	</div>
</template>

<script>
import axios from 'axios'
import activity from './HomeComponent/activity'
import recommend from './HomeComponent/recommend'
import furniture from './HomeComponent/furniture'
import houseHome from './HomeComponent/houseHome'
import backTop from './backTop'

export default {
  name: 'home',
  data() {
    return {
		current:"recommend",
		titleList:{"recommend":"推荐","furniture":"家具","houseHome":"家居","activity":"活动"},
		//titleList1:["recommend","furniture","houseHome","activity"]
    }
  },
  components:{
  	recommend,
  	furniture,
  	houseHome,
  	activity,
  	backTop,
  },
  methods:{
  	
  },
  mounted(){
		//给推荐、家具、家居、活动添加点击事件
		$(function(){
			$("#tabUl").find("li").click(function(){
				$(this).addClass("active").siblings().removeClass("active");
			})
		})
	}
}
  		



</script>

<style lang="scss" scoped>
html,body,p,ul,li,input,a,div,ol,textarea,select,button,img,form,h1,h2,h3,h4,h5,h6{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}
img{
	display: block;
	border: none;
}
li{
	list-style: none;
}
.active{
	border-bottom: 0.06rem solid #202020;
    color: #000000 !important;
    height: 0.74rem;
}

.header{
	background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 0px;
    .logo{
	    display: inline-block;
	    width: 1.3rem;
	    vertical-align: middle;
	    margin-top: 0.06rem;
	    margin-bottom: 0.06rem;
    }
    #searchInfor {
	    display: inline-block;
	    position: relative;
	    width: 5.3rem;
	    height: 0.56rem;
	    line-height: 0.56rem;
	    vertical-align: middle;
	    background-color: #F5F5F5;
	    border-radius: 0.3rem;
	    margin-left: 0.15rem;
	    margin-bottom: 0.05rem;
	    #searchIcon{
		    display: inline-block;
		    width: 0.4rem;
		    position: relative;
		    top: -6px;
		    left: 10px;
		}
		input{
		   position: relative;
		   top: -12px;
		    display: inline-block;
		    width: 80%;
		    height: 0.54rem;
		    outline: none;
		}
	}
}
#leftTabBox {
    background-color: #fff;
   .hdd{
	   	height: 0.8rem;
	    font-size: 0.28rem;
	    background: #fff;
	    #tabUl{
	    		line-height: 0.8rem;
	    		background: #fff;
		    height: 0.8rem;
		    overflow: hidden;
		    li{
		    		float: left;
			    color: #808080;
			    margin: 0rem 0.43rem;
			    font-size: 0.28rem;
			    padding: 0 0.22rem;
			    a{
			    	color: #808080;
			    }
		    }
	    }
   }
}
	
</style>