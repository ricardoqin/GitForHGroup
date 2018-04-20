<template>
	<div class="bodyBox">
		<div id="shoppingCartListDiv">
			<!--头部========================开始-->
			<header class="header">
				<a href="/src/components/home.vue" class="header-left">
					<img src="../assets/HomeImg/home.png">
				</a>
				<h3>购物车</h3>
				<div class="header-div-right">
					<a id="editShoppingCart" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">编辑</a>
				</div>
			</header>
			<!--头部========================结束-->
			<div class="por-box shoppingCartContent">
				<!--购物车组开始 动态加载，如果有数据才会有这个div的存在-->
				<!--<div class="por-box-group">
					<div class="order-por">
						<div class="select">
							<i class="iconfont icon-gouxuan"></i>
							<ul class="shuliang-right clearfix" data-shoppingcartid="" data-currentproductqty="1">
								<li class="jian" enable="1" style="color:#ccc">-</li>
								<li class="zi">1</li>
								<li class="jia" enable="1">+</li>
							</ul>
						</div>
						<div class="top clearfix" name="productTitle" data-productid="">
							<div class="pro-img">
								<img src="">
							</div>
							<ul>
								<li class="wupinTitle">
									<span ></span>
								</li>
								<li class="wupinIntro"></li>
								<li class="wupinMoney">
									<span class="money">¥</span>
									<span class="wupinCount">x</span>
								</li>
							</ul>
						</div>
					</div>
				</div>-->
				<!--购物车组结束 动态加载，如果有数据才会有这个div的存在-->
			</div>
		</div>
		<!--为您推荐开始 需要用到下拉刷新 push到数组里面新的数据======================开始-->
		<div class="complex" id="relatedRoot" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
			<p class="product-title">- 为您推荐 -</p>
			<div class="brand-details-list content" id="recommendProductDiv">
				<div class="clearfix ul flex-cont flex-centerbox lists" id="recommendProducts">
					<ul v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
						<li class="li" v-for="data in recommendList">
							<img :src="data.productImg">
							<div><p class="wupinName">{{data.productTitle}}</p></div>
							<p class="wupinPrice">¥{{data.originalPrice}}</p>
							<p class="wupinMessage">{{data.prizeOrSlogan}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--为您推荐开始 需要用到下拉刷新 push到数组里面新的数据======================结束-->
		
		<!--loading框给我开始转==================================开始-->
		<div class="dropload-down">
			<div class="dropload-load">
				{{this.loadingMessage}}
			</div>
		</div>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
  name: 'home',
  data () {
    return {
		recommendList:[],
		i:0,
		loadingMessage:"加载中...."
		//source: null
    }
  },
  mounted(){
  	//https://m.wowdsgn.com/recommend/cart?currentPage=2&_=1524213505727
  	//https://m.wowdsgn.com/recommend/cart?currentPage=3&_=1524213505909
//	axios.get("/recommend/cart?currentPage=1&_=1524205060536").then(res=>{
//		//console.log(res.data.data);
//		this.recommendList=res.data.data;
//	})
  },
  
  methods:{
  	loadMore(){
  		this.loading = true;
  		this.i++;
  		console.log(this.i);
  		if(this.i>10){
  			this.loadingMessage="没有更多了"
  			console.log("数据加载完毕");
  			return this.i;
	 	}
	 	axios.get(`/recommend/cart?currentPage=${this.i}&_=1524205060536`).then(res=>{
	  		//console.log(res.data.data);
	  		console.log(this.recommendList);
	  		this.recommendList=[...this.recommendList,...res.data.data];	  		
	  		this.loading=false;
	  })
	}
  }
}
</script>

<style lang="scss" scoped>
.bodyBox{
	background: #F5F5F5;
}
.header {
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
    border-bottom: 1px solid #f5f5f5;
    img{
	    display: inline-block;
	    width: 0.52rem;
	    margin-top: 0.06rem;
	    margin-bottom: 0.06rem;
	    vertical-align: middle;
	}
    .header-left{
	    display: inline-block;
	    width: 0.64rem;
	    height: 0.64rem;
	    line-height: 0.5rem;
	    position: absolute;
	    left: 0.2rem;
	    top: 50%;
	    transform: translateY(-50%);
	    -webkit-transform: translateY(-50%);
	    -moz-transform: translateY(-50%);
	    -o-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	    border-radius: 50%;
	    -moz-border-radius: 50%;
	}
	h3{
		position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%,-50%);
	    -webkit-transform: translate(-50%,-50%);
	    -moz-transform: translate(-50%,-50%);
	    -o-transform: translate(-50%,-50%);
	    -ms-transform: translate(-50%,-50%);
	    font-size: 0.34rem;
	    margin: 0;
	    padding: 0;
	    border: 0;
	}
	.header-div-right {
	    display: inline-block;
	    position: absolute;
	    height: 0.64rem;
	    line-height: 0.64rem;
	    font-size: 0.3rem;
	    right: 0.2rem;
	    top: 50%;
	    transform: translateY(-50%);
	    -webkit-transform: translateY(-50%);
	    -moz-transform: translateY(-50%);
	    -o-transform: translateY(-50%);
	    -ms-transform: translateY(-50%);
	    border-radius: 50%;
	    -moz-border-radius: 50%;
	    a{
		    	color: #2C3030;
		    	text-decoration: none;
		    	-webkit-tap-highlight-color: transparent;
	    }
	}
}
.por-box{
	width: 100%;
	
}
#shoppingCartListDiv .por-box {
    margin-bottom: 0.3rem;
}
/*动态加载的哪一块的css还没写呢*/
.complex {
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    .product-title{
	    font-size: 0.32rem;
	    text-align: center;
	    color: #000;
	    padding: 0.4rem 0;
	    background: white;
	}
	.brand-details-list{
		border-top: 1px solid #f5f5f5;
		.flex-cont{
			display: flex;
			flex-flow: wrap;
			li{
				float: left;
			    width: 49.8%;
			    /* border-top: 1px solid #f5f5f5; */
			    border-right: 1px solid #f5f5f5;
			    border-bottom: 1px solid #f5f5f5;
			    box-sizing: border-box;
			    -moz-box-sizing: border-box;
			    -webkit-box-sizing: border-box;
			    -o-box-sizing: border-box;
			    -ms-box-sizing: border-box;
			    font-size: 0;
			    position: relative;
			    padding-bottom: 0.1rem;
			    height: 5.6rem;
			    img{
			    		width: 3.7rem;
				    height: 3.71rem;
				    margin: 0 auto 0;
				    display: block;
			    }
			    div{
			    		box-sizing: border-box;
				    -moz-box-sizing: border-box;
				    -webkit-box-sizing: border-box;
				    -o-box-sizing: border-box;
				    -ms-box-sizing: border-box;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    position: relative;
				    margin-bottom: 0.05rem;
				    margin-left: 0.3rem;
				    width: 88%;
				    margin-top: 0.5rem;
				    .wupinName{
				    		color: #808080;
					    font-size: 0.25rem;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    width: 100%;
				    }
			    }
			    
			    .wupinPrice{
			    		font-family: PingFangSC-Regular;
				    font-size: 0.26rem;
				    color: #000;
				    /* margin-bottom: 0.05rem; */
				    margin-right: 0.1rem;
				    margin-left: 0.3rem;
			    }
			    .wupinMessage{
			    		color: #808080;
				    font-size: 0.22rem;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    width: 80%;
				    margin-left: 0.3rem;
			    }
			}
		}
	}
}
.dropload-down{
	background: white;
	height: 50px;    
	width: 100%;
	position: relative;
    overflow: hidden;
    font-size: 12px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    .dropload-load{
    	    height: 50px;
	    line-height: 50px;
	    text-align: center;
	    .loading{
	    		display: inline-block;
		    height: 15px;
		    width: 15px;
		    border-radius: 100%;
		    margin: 6px;
		    border: 2px solid #666;
		    border-bottom-color: transparent;
		    vertical-align: middle;
		    -webkit-animation: rotate 0.75s linear infinite;
		    animation: rotate 0.75s linear infinite;
	    }
    }
}
</style>