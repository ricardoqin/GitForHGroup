<template>
	<div class="t" id="content">
		<!--推荐组件中的轮播图 ===================开始-->
		<!--<div class="swiper">
			<Swiper v-if="bannersList.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
				<Slide v-for="data in bannersList" :key="data.id">
					<img :src="data.bannerImgSrc">
				</Slide>
			</Swiper>
		</div>-->
		<div class="swiper-container">
			<swipe class="my-swipe">
				<swipe-item v-for="data in bannersList" :key="data.id" >
					<img :src="data.bannerImgSrc"/>
				</swipe-item>
			</swipe>
		</div>
		<!--推荐组件中的轮播图 ===================结束-->
		<!--top 热卖清单==========================开始-->
		<div class="page-module page-module-product-group-landscape">
			<div class="page-module-title">
				<h1 align="center">Top 热卖清单</h1>
			</div>
			<!--<div class="product-group-landscape">-->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for="data in hostDetailList" class="swiper-slide">
							<img :src="data.productImg" class="wupin">
							<p class="title">{{data.productTitle}}</p>
							<p class="price">¥{{data.originalPrice}}</p>
						</div>
					</div>
				</div>
			<!--</div>-->
			<div class="page-module-more">
				<a href="">查看全部</a>
			</div>
		</div>
		<!--top 热卖清单==========================结束-->
		<!--精选好物板块=============================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
	            <h1>精选好物</h1>
	        </div>
	        <div class="page-module banner-group-fixed-portrait">
	            <div class="banner">
	                <a href="javascript:;">
	                    <img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/a589dbad-b0c3-49cc-b01a-8470a8c4afa8_2dimension_1125x564.jpg?imageslim" style="display: block;">
	                </a>
	            </div>
	        </div>
	        <div class="product-list">
	        		<ul class="clearfix">
	        			<li v-for="data in goodWupinList">
	        				<img :src="data.productImg">
	        				<p>{{data.productTitle}}</p>
	        				<span>¥{{data.sellPrice}}</span>
	        			</li>
	        		</ul>
	        </div>
		</div>
		<!--精选好物板块=============================结束-->
		<!--家居集锦板块===============================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>家居集锦</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/4faf8bcd-7fb0-4eb0-8cb8-1d7abde470d4_2dimension_1125x564.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in jiajuList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--家居集锦板块===============================结束-->
		
		<!--场景搭配板块===============================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>场景搭配</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy"  src="https://img.wowdsgn.com/page/banners/fdbe2b89-9282-4645-9c77-d358de0c40ee_2dimension_1125x750.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in sceneMathList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--场景搭配板块===============================结束-->
		<!--品牌推荐模块===============================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>品牌推荐</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/42936cff-d10a-458d-9223-9c51b85b61c4_2dimension_1125x750.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in brandRecommendList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--品牌推荐模块===============================结束-->
		<!--小孩子才玩积木模块============================开始-->
		<div class="page-module page-module-banner">
			<div class="banner">
				<a href="javascript:;">
					<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/66ceac10-e6e9-486a-bc89-c907fc464977_2dimension_1125x750.jpg?imageslim" style="display: block;">
				</a>
			</div>
		</div>
		<!--小孩子才玩积木模块============================结束-->
		<!--新品首发模块=================================开始-->
		<div class="page-module page-module-product-group-landscape">
			<div class="page-module-title">
				<h1 align="center">新品首发</h1>
			</div>
			<div class="product-group-landscape">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for="data in newFirstList"  class="swiper-slide">
							<img :src="data.productImg" class="wupin">
							<p class="title">{{data.productTitle}}</p>
							<p class="price">¥{{data.originalPrice}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="page-module-more">
				<a href="" onclick="">查看全部</a>
			</div>
		</div>
		<!--新品首发模块=================================结束-->
		<!--精选好物模块=================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>精选好物</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/e7b1740f-7f64-4a4a-a3a2-91f606434c45_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in choicenessList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--精选好物模块=================================结束-->
		<!--家居集锦======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>家居集锦</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/e1dc93e3-e5be-4cba-9825-2f72b8ebdbf3_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in jiajuTimeList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--家居集锦======================================结束-->
		<!--场景搭配======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>场景搭配</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/1056ba9a-a299-4c7f-969c-9fca4d2dddc6_2dimension_750x500.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in sceneMathList1">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--场景搭配======================================结束-->
		<!--品牌推荐======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>品牌推荐</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/36f84c66-f59b-44f1-b021-5f2681c21e48_2dimension_750x500.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in brandRecommendList1">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--品牌推荐======================================结束-->
		<!--极简主义的温柔=================================开始-->
		<div class="page-module page-module-banner">
			<div class="banner">
				<a href="javascript:;">
					<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/36118cb6-a664-47ec-b719-2af17ddf2769_2dimension_750x500.jpg?imageslim" >
				</a>
			</div>
		</div>
		<!--极简主义的温柔===================================结束-->
		<!--精选好物======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>精选好物</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/8baf24f0-eab8-479e-ad6b-5be17c133652_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in choicenessList1">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--精选好物======================================结束-->
		<!--家居集锦======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>家居集锦</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/4adfddc7-9c34-49a2-8791-9a278294ae4d_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in jiajuTimeList1">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--家居集锦======================================结束-->
		<!--场景搭配2======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>场景搭配</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/2907d827-4a36-457b-8e32-4af01311e87d_2dimension_750x500.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in sceneMathList2">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--场景搭配2======================================结束-->
		<!--品牌推荐2======================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>品牌推荐</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/263d5025-3638-45b7-a11e-0084a35b2f97_2dimension_1125x750.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in brandRecommendList2">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--品牌推荐======================================结束-->
		<!--这个空间利用神器================================开始-->
		<div class="page-module page-module-banner">
			<div class="banner">
				<a href="javascript:;">
					<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/2ee8e14f-ebac-4d5b-ae9f-953770795a78_2dimension_750x500.jpg?imageslim" >
				</a>
			</div>
		</div>
		<!--这个空间利用神器================================结束-->
		<!--礼品精选========================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>礼品精选</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/6cd99f47-b4de-467e-9d1e-567157690949_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in giftChoicenessList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--礼品精选========================================结束-->
		<!--收纳精选========================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>收纳精选</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/b32c99a4-38ab-4a93-aeaf-a225629b0ce4_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in acceptChoicenessList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--收纳精选========================================结束-->
		<!--家纺精选========================================开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>家纺精选</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/3503a468-ca1b-42c1-a8cc-512f81964be4_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in textilesChoicenessList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--家纺精选========================================结束-->
		<!--家饰精选========================================开始-->
		<div class="banner-group-and-product-record bottomModule">
			<div class="page-module-title">
				<h1>家饰精选</h1>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/0fdea22b-e893-4676-92ae-fce143cb9de5_2dimension_750x376.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in decorationChoicenessList">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--家饰精选========================================结束-->
		<div class="boomboom">
			
		</div>
	</div>
	
</template>

<script>
import axios from 'axios'
import Vue from 'vue';
//import { Swiper, Slide } from 'vue-swiper-component';
import 'vue-swipe/dist/vue-swipe.css';
// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';
export default{
	data(){
		return{
			bannersList:[],//轮播图的数据
			hostDetailList:[],//热卖清单的数据
			goodWupinList:[],//好物的数据
			jiajuList:[],//家居的数据
			sceneMathList:[],//场景搭配的数据
			brandRecommendList:[],//品牌推荐的数据
			newFirstList:[],//新品首发的数组
			choicenessList:[],//精选好物
			jiajuTimeList:[],//家居集锦
			sceneMathList1:[],
			brandRecommendList1:[],
			choicenessList1:[],//
			jiajuTimeList1:[],
			sceneMathList2:[],
			brandRecommendList2:[],
			giftChoicenessList:[],//礼品精选
			acceptChoicenessList:[],//收纳精选
			textilesChoicenessList:[],//家纺精选
			decorationChoicenessList:[],//家饰精选
		}
	},
	components:{
		"swipe":Swipe,
		"swipe-item":SwipeItem
	},
	mounted(){
		fetch("/v2/page?pageId=1&tabId=1&_=1523950016984",{credentials: 'include'}).then(res=>res.json()).then(res=>{
//				console.log(res.data.modules[0].moduleContent.banners);//轮播请求的数据
				this.bannersList=res.data.modules[0].moduleContent.banners;
//				console.log(res.data.films);
				this.hostDetailList=res.data.modules[2].moduleContent.products;
				//this.hostDetailList=res.data.modules[3].moduleContent.banners;
				this.goodWupinList=res.data.modules[3].moduleContent.products;
				this.jiajuList=res.data.modules[4].moduleContent.products;
				this.sceneMathList=res.data.modules[5].moduleContent.products;
				this.brandRecommendList=res.data.modules[6].moduleContent.products;
				this.newFirstList=res.data.modules[8].moduleContent.products;
				this.choicenessList=res.data.modules[9].moduleContent.products;
				this.jiajuTimeList=res.data.modules[10].moduleContent.products;
				this.sceneMathList1=res.data.modules[11].moduleContent.products;
				this.brandRecommendList1=res.data.modules[12].moduleContent.products;
				this.choicenessList1=res.data.modules[14].moduleContent.products;
				this.jiajuTimeList1=res.data.modules[15].moduleContent.products;
				this.sceneMathList2=res.data.modules[16].moduleContent.products;
				this.brandRecommendList2=res.data.modules[17].moduleContent.products;
				this.giftChoicenessList=res.data.modules[19].moduleContent.products;
				this.acceptChoicenessList=res.data.modules[20].moduleContent.products;
				this.textilesChoicenessList=res.data.modules[21].moduleContent.products;
				this.decorationChoicenessList=res.data.modules[22].moduleContent.products;
				setTimeout(() => {
					var swiper = new Swiper('.swiper-container',{
						width:103,
						speed:500,//速度
						pagination: '.swiper-pagination',
						freeMode : true,//随意滑动
						//slidesPerView:4
					},10)
				})
			})
//		axios.get('/v2/page?pageId=1&tabId=1&_=1523950016984').then(res=>{
//			console.log(res)
//		})
			
	},
//	Updated(){
//		var swiper = new Swiper('.swiper-container',{
//			slidesPerView:4
//		})
//	}
}

</script>

<style lang="scss">
	html, body {
      position: relative;
      height: 100%;
    }
img{
	display: block;
	border: none;
}
/*.bottomModule{
	margin-bottom: 50px !important;
}*/
.t{
	width: 100%;
    background: #f5f5f5;
    .boomboom{
    		height: 40px;
    }
    .backTop{
	    	position: fixed;
	    right: 0.5rem;
	    bottom: 1.5rem;
	    display: none;
	    z-index: 998;
	    width: 0.7rem;
	    height: 0.7rem;
    }
	.swiper-container{
		background-color: #fff;
    		margin-bottom: 0.3rem;
    		.my-swipe{
    			height: 4.98rem;
    			img{
				width: 7.5rem;
				height: 250px;
			}
    		}  		
	}
	.page-module{
		background-color: #fff;
    		margin-bottom: 0.3rem;
    		.page-module-title {
		    padding: 0.26rem 0rem 0rem;
		    h1{
		    		text-align: center;
		    		font-weight: bold;
			    font-size: 0.36rem;
			    color: #333;
			    margin: 0.3rem 0;
		    }
		}
	}
/*	.product-group-landscape{*/		
	.swiper-container{
		.swiper-wrapper{
			margin-top: 0.3rem;			
			.swiper-slide{
				width:1.8rem !important;
				float: left;
				margin-right: 0.15rem;
   				margin-left: 0.2rem;
			}
			.wupin{
				width: 1.8rem;
				height: 90px;
			}
			.title{
				font-size: 0.24rem;
			    color: #808080;
			    width: 1.8rem;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			}
			.price{
				font-size: 0.24rem;
			}
		}
	}
	.page-module-more {
	    text-align: center;
	    padding: 0.3rem 0.4rem;
	    a{
	    	    font-size: 0.24rem;
		    color: #4A4A4A;
		    background-size: 10%;
		    padding: 0.3rem;
		    background:url(../../assets/HomeImg/right.png) no-repeat 70px;
	    }
	}
	.banner-group-and-product-record {
	    background-color: #fff;
	    margin-bottom: 0.3rem;
	    overflow: hidden;
	    .page-module-title {
		    padding: 0.26rem 0rem 0rem;
			h1 {
			    font-weight: bold;
			    font-size: 0.36rem;
			    color: #333;
			    margin: 0.3rem 0;
			    text-align: center;
			}
		}
		.banner-group-fixed-portrait {
		    padding: 0.3rem 0.3rem 0rem;
		    .banner{
		    		padding-bottom: 0;
		    		img{
		    			width: 345px;
		    		}
		    }
		}
		.product-list {
		    padding: 0 0.3rem 0.3rem;
		    background: #fff;
		    .clearfix {
			    zoom: 1;
			    overflow:hidden;
			    li{
			    	float: left;
			    width: 30.4%;
			    margin-right: 0.2rem;
			    img{
			    		width: 2.16rem;
			    		height: 2.16rem;
			    }
				    	p{
				    		width: 100%;
					    margin: 0.1rem 0rem 0rem;
					    overflow: hidden;
					    display: -webkit-box;
					    -webkit-line-clamp: 1;
					    -webkit-box-orient: vertical;
					    text-overflow: ellipsis;
					    text-align: center;
					    font-size: 12px;
				    	}
				    	span{
				    		font-size: 0.24rem;
				    		text-align: center;
				    		display: block;
				    	}
			    }
			}
		}
	}
	.page-module-banner{
		img{
			width: 7.5rem;
		}
	}
}
</style>