<template>
	<div class="wrap">
		<!--家具轮播图===============开始-->
		<div class="swiper-container">
			<swipe class="my-swipe">
				<swipe-item v-for="data in bannersList" :key="data.id" >
					<img :src="data.bannerImgSrc"/>
				</swipe-item>
			</swipe>
		</div>
		<!--家具轮播图===============结束-->
		
		<!--家装攻略===============开始-->
		<div class="page-module page-module-product-group-landscape">
			<div class="page-module-title">
				<h1 align="center">家装攻略</h1>
				<h3>现代家具新风貌</h3>
			</div>
			<div class="product-group-landscape">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div v-for="data in homeStrategy" @click="jumpdetail(data.productId)" class="swiper-slide">
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
		<!--家装攻略===============结束-->
		
		<!--品牌推荐===============开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
				<h1>品牌推荐</h1>
				<h3>国际大牌 有好货</h3>
			</div>
			<div class="page-module banner-group-fixed-portrait">
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/2e3f6cad-b80e-45ba-935d-f850e9dc5f6f_2dimension_1248x828.jpg?imageslim">
					</a>
				</div>
			</div>
			<div class="product-list">
				<ul class="clearfix">
					<li v-for="data in brandRecommendList" @click="jumpdetail(data.productId)">
						<img :src="data.productImg">
						<p>{{data.productTitle}}</p>
						<span>¥{{data.sellPrice}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--品牌推荐===============结束-->
		
		<!--热门分类===============开始-->
		<div class="page-module page-module-banner-group-fixed-landscape">
			<!-- 添加标题 开始-->
			<div class="page-module-title">
				<h1>热门分类</h1>
			</div>
			<!-- 添加标题 结束-->
			<div class="banner-group banner-group-fixed-landscape">
				<div class="banner" v-for="data in hostClassifyList">
					<a href="javascript:;">
						<img class="banner-image lazy" :src="data.bannerImgSrc" style="display: block;">
					</a>
				</div>
				<!--<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" onclick="bannerJump(11,'',2110);trackEvent('click','首页.'+getCurrentTab(),'热门分类',1);" src="https://img.wowdsgn.com/page/banners/7594da22-a941-448f-994e-f047769efac5_2dimension_355x420.jpg?imageslim" style="display: block;">
					</a>
				</div>
				<div class="banner">
					<a href="javascript:;">
						<img class="banner-image lazy" onclick="bannerJump(11,'',2411);trackEvent('click','首页.'+getCurrentTab(),'热门分类',2);" src="https://img.wowdsgn.com/page/banners/336d3743-faa6-4884-8bfa-7ce57a1abb68_2dimension_355x420.jpg?imageslim" style="display: block;">
					</a>
				</div>-->
		
			</div>
		</div>
		<!--热门分类===============结束-->
		
		<!--手边收纳===============开始-->
		<div class="page-module page-module-product-group-portrait">
			<div class="page-module-title">
				<h1>手边收纳</h1>
				<h3>需要它的时候就近在咫尺</h3>
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in handAcceptList" @click="jumpdetail(data.productId)">
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
		<!--手边收纳===============结束-->
		<!--搭配桌几===============开始-->
		<div class="page-module page-module-product-group-portrait">
			<div class="page-module-title">
				<h1>搭配桌几</h1>
				<h3>细节让你的家美丽迷人</h3>
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in matchTableList" @click="jumpdetail(data.productId)">
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
		<!--搭配桌几===============结束-->
		
		<!--蜗居衣架===============开始-->
		<div class="page-module page-module-product-group-portrait">
			<div class="page-module-title">
				<h1>蜗居衣架</h1>
				<h3>衣柜「爆炸」的解决方案</h3>
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in coatHangerList" @click="jumpdetail(data.productId)">
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
		<!--蜗居衣架===============结束-->
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
			bannersList:[],//轮播数据
			homeStrategy:[],//家装攻略
			brandRecommendList:[],//品牌推荐
			hostClassifyList:[],//热门分类
			handAcceptList:[],//手边分类
			matchTableList:[],//搭配桌几
			coatHangerList:[],//蜗居衣架
		}
	},
	components:{
		"swipe":Swipe,
		"swipe-item":SwipeItem
	},
	methods:{
		jumpdetail(id){
			router.push(`/detail/detail=${id}`)
		}	
	},
	mounted(){
		fetch("/v2/page?pageId=1&tabId=10005&_=1523982316268",{credentials: 'include'}).then(res=>res.json()).then(res=>{
			//console.log(res.data.modules[0].moduleContent.banners)
			this.bannersList=res.data.modules[0].moduleContent.banners;
			this.homeStrategy=res.data.modules[1].moduleContent.products;
			this.brandRecommendList=res.data.modules[2].moduleContent.products.splice(0,3);
			this.hostClassifyList=res.data.modules[3].moduleContent.banners;
			this.handAcceptList=res.data.modules[4].moduleContent.products.splice(0,6);
			this.matchTableList=res.data.modules[5].moduleContent.products.splice(0,6);
			this.coatHangerList=res.data.modules[6].moduleContent.products.splice(0,6);
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
					    width: 30.4%;
					    margin-right: 0.2rem;
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
			    		border-right:none;
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
			.swiper-container{
		background-color: #fff;
    		margin-bottom: 0.3rem;
    		margin: 0 auto;
	    position: relative;
	    overflow: hidden;
	    z-index: 1;
    		.my-swipe{
    			height: 4.98rem;
    			img{
				width: 7.5rem;
				height: 250px;
			}
    		}  		
	} 
</style>