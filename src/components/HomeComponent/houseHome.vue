<template>
	<div class="wrap">
		<!--家居轮播图===============开始-->
		<div class="swiper-container">
			<swipe class="my-swipe">
				<swipe-item v-for="data in bannersList" :key="data.id" >
					<img :src="data.bannerImgSrc"/>
				</swipe-item>
			</swipe>
		</div>
		<!--家具轮播图===============结束-->
		
		<!--创新设计===============开始-->
		<div class="page-module page-module-product-group-landscape">
			<div class="page-module-title">
				<h1 align="center">创新设计</h1>
				<h3>艺术精品生活馆</h3>
			</div>
			<div class="product-group-landscape">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for="data in innovativeDesignList" @click="" class="swiper-slide">
							<img :src="data.productImg" class="wupin">
							<p class="title">{{data.productTitle}}</p>
							<p class="price">¥{{data.originalPrice}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="page-module-more">
				<a href="">查看全部</a>
			</div>
		</div>
		<!--创新设计===============结束-->
		
		<!--品牌推荐===============开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>品牌推荐</h1>
				<h3>国际大牌 有好货</h3>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/3535d124-8259-4d62-af42-ea5b1077dfef_2dimension_1248x828.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in brandRecommendList">
						<img :src="data.productImg">
						<p >{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--品牌推荐===============结束-->
		
		<!--热门分类===============开始-->
		<div class="page-module page-module-banner-group-fixed-landscape">
			<div class="page-module-title">
				<h1>热门分类</h1>
			</div>
			<div class="banner-group banner-group-fixed-landscape">
				<div class="banner" v-for="data in hostClassifyList">
					<img :src="data.bannerImgSrc" style="width: 70px;height: 88px;"/>
				</div>
			</div>
		</div>
		<!--热门分类===============结束-->
		
		<!--气氛餐具===============开始-->
		<div class="page-module page-module-product-group-portrait">
			<div class="page-module-title">
				<h1>气氛餐具</h1>
				<h3>变身摆盘达人 聚餐马上开始</h3>
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in auraTablewareList">
							<img :src="data.productImg">
							<div>
								<p>{{data.productName}}</p>
								<span>¥{{data.sellPrice}}</span>
							</div>	
						</li>
					</ul>
				</div>
			</div>
			<div class="page-module-more">
				<a href="">查看全部</a>
			</div>
		</div>
		<!--气氛餐具===============结束-->
		<!--简单易取===============开始-->
		<div class="page-module page-module-product-group-portrait">
			<div class="page-module-title">
				<h1>能装易取</h1>
				<h3>带上行李取追寻自然哲学</h3>
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in simplenessList">
							<img :src="data.productImg">
							<div>
								<p>{{data.productName}}</p>
								<span>¥{{data.sellPrice}}</span>
							</div>	
						</li>
					</ul>
				</div>
			</div>
			<div class="page-module-more">
				<a href="">查看全部</a>
			</div>
		</div>
		<!--简单易取===============结束-->
			
		<!--造型伞具===============开始-->
		<div class="page-module page-module-product-group-portrait">
			<div class="page-module-title">
				<h1>造型伞具</h1>
				<h3>找到打开雨伞的正确姿势</h3>
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in modellingUmbrellaList">
							<img :src="data.productImg">
							<div>
								<p>{{data.productName}}</p>
								<span>¥{{data.sellPrice}}</span>
							</div>	
						</li>
					</ul>
				</div>
			</div>
			<div class="page-module-more">
				<a href="">查看全部</a>
			</div>
		</div>
		<!--造型伞具===============结束-->
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
			bannersList:[],
			innovativeDesignList:[],//创新设计
			brandRecommendList:[],//品牌推荐
			hostClassifyList:[],//热门分类
			auraTablewareList:[],//气氛餐具
			simplenessList:[],//简单易取
			modellingUmbrellaList:[],//造型伞具
		}
	},
	components:{
		"swipe":Swipe,
		"swipe-item":SwipeItem
	},
	mounted(){
		fetch("/v2/page?pageId=1&tabId=10006&_=1523983490072",{credentials: 'include'}).then(res=>res.json()).then(res=>{
			//console.log(res.data.modules[0].moduleContent.banners)
			this.bannersList=res.data.modules[0].moduleContent.banners;
			this.innovativeDesignList=res.data.modules[1].moduleContent.products;
			this.brandRecommendList=Array.from(res.data.modules[2].moduleContent.products);
			//console.log((res.data.modules[2].moduleContent.products));
			this.hostClassifyList=Array.from(res.data.modules[3].moduleContent.banners);
			console.log(res.data.modules[3].moduleContent.banners)
			this.auraTablewareList=res.data.modules[4].moduleContent.products.splice(0,6);
			this.simplenessList=res.data.modules[5].moduleContent.products.splice(0,6);
			this.modellingUmbrellaList=res.data.modules[6].moduleContent.products;
			setTimeout(() => {
				var swiper = new Swiper('.swiper-container',{
					width:103,
					speed:500,//速度
					//pagination: '.swiper-pagination',
					//paginationClickable: false,
					freeMode : true,//随意滑动
			},10)
		});
		})
	}
}
</script>

<style lang="scss" scoped>
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
	.wrap{
	width: 100%;
    background: #f5f5f5;
}
	.page-module {
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
		    h3{
		    		font-size: 0.24rem;
			    color: #808080;
			    margin-bottom: 0.2rem;
			    font-weight: normal;
    				text-align: center;
		    }
		}
.product-group-landscape{
	.swiper-container{
		.swiper-wrapper{
			margin-top: 0.3rem;
			.swiper-slide{
				width: 90px;
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
		}
		.page-module-more {
		    text-align: center;
		    padding: 0.3rem 0.4rem;
		    a{
			    	font-size: 0.24rem;
	    			color: #4A4A4A;
	    			background: url(../../assets/HomeImg/right.png) no-repeat 70px;
	    			background-size: 10%; 
	    			padding: 0.3rem;
		    }
		}
	}
	.banner-group-and-product-record{
			background-color: #fff;
    			margin-bottom: 0.3rem;
    			 overflow: hidden;
    			.page-module-title {
			    padding: 0.26rem 0rem 0rem;
			    h1{
			    		font-weight: bold;
				    font-size: 0.36rem;
				    color: #333;
				    margin: 0.3rem 0;
				    font-weight: normal;
				    text-align: center;
			    }
			    h3{
			    		font-size: 0.24rem;
				    color: #808080;
				    margin-bottom: 0.2rem;
				    font-weight: normal;
				    text-align: center;
			    }
			}
			.banner-group-fixed-portrait{
				padding: 0.3rem 0.3rem 0rem;
				.banner{
					padding-bottom: 0;
					img{
						width: 6.9rem;
						height: 228px;
					}
				}
			}
			.product-list {
			    padding: 0 0.3rem 0.3rem;
			    background: #fff;
			    .clearfix {
				    zoom: 1;
				    li {
					    float: left;
					    width: 108px;
					    margin-right: 0.1rem;
					    img{
					    	width: 108px;
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
		.page-module-banner-group-fixed-landscape{			
				.banner-group-fixed-landscape{
					padding-bottom: 0.3rem;
					display: flex;
				    flex-flow: row;
				    flex-direction: row;
				    align-items: center;
				    padding: 0.3rem 0.3rem 0rem;
					.banner {
					    flex-grow: 1;
					    flex-basis: 0;
					    margin-right: 0.3rem;
					    padding-bottom:0.3rem;
					    .banner-image {
	 					   width: 2.1rem;height: 125px;
						}
					}
				}
			}
			.brand-details-list {
			    background: #fff;
			    overflow: hidden;
			    .lists{
			    		border-top: 1px solid #F5F5F5;
			    }
			    .flex-cont{
			    		display: flex;
    					flex-flow: wrap;
			    }
			    .flex-centerbox{
			    		width: 100%;
			    		align-items: center;
    					margin: 0px;
			    }
			    .ul{
			    	overflow: hidden;
			    li:nth-of-type(even){
			    		border-right: none;
			    }
			    		li{
			    			float: left;
					    width: 49.5%;
					    height: 5.9rem;
					    border-bottom: 1px solid #F5F5F5;
					    border-right: 1px solid #F5F5F5;
					    img{
					    		width: 3.72rem;
					    }
					    div{
					    		padding: 0rem 0.32rem;
						    position: relative;
						    margin-top: 0.2rem;
						    font-size: 0;
							    p{
						    		padding-top: 0.1rem;
							    color: #808080;
							    font-size: 0.28rem;
							    overflow: hidden;
							    text-overflow: ellipsis;
							    white-space: nowrap;
						    }
						    span{
							    	font-size: 0.32rem;
		   					 	margin-right: 0.1rem;
						    }
					    }
			    		}
			    }
			} 
</style>