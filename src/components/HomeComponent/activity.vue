<template>
	<div class="wrap">
		<!--活动轮播图===============开始-->
		<div class="swiper-container">
			<swipe class="my-swipe">
				<swipe-item v-for="data in bannersList" :key="1" >
					<img :src="data.bannerImgSrc"/>
				</swipe-item>
				<swipe-item v-for="data in bannersList"  :key="2">
					<img :src="data.bannerImgSrc"/>
				</swipe-item>
			</swipe>
		</div>
		<!--活动轮播图===============结束-->
		
		<!--限时抢购===============开始-->
		<div class="page-module page-module-banner">
			<div class="banner">
				<a href="javascript:;">
					<img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/0f9ee6a6-d1a4-47d2-9e0f-71ae3564aeaf_2dimension_1200x201.jpg?imageslim">
				</a>
			</div>
		</div>
		<!--限时抢购===============结束-->
		
		<!--新人专享===============开始-->
		<div class="page-module page-module-banner">
        <div class="banner">
            <a href="javascript:;">
                <img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/a334264e-eb30-4528-ac0e-a7939e06c685_2dimension_1200x718.jpg?imageslim" style="display: block;">
            </a>
        </div>
    </div>
		<!--新人专享===============结束-->
		
		<!--行走的泡茶保温杯===============开始-->
		<div class="banner-group-and-product-record">
			<div class="page-module-title">
            		<h1>清仓特惠</h1>
        		</div>
        		<div class="page-module banner-group-fixed-portrait">
            <div class="banner">
                <a href="javascript:;">
                    <img class="banner-image lazy" src="https://img.wowdsgn.com/page/banners/866dfdba-9fad-4267-860e-5ac09270731d_2dimension_1248x720.jpg?imageslim" style="display: block;">
                </a>
            </div>
        </div>
		</div>
		<!--行走的泡茶保温杯===============结束-->
		<!--清仓特惠===============开始-->
		<div class="page-module page-module-product-group-portrait cancleMargin">
			<div class="page-module-title">
				<h1>人气单品</h1>				
			</div>
			<div class="complex">
				<div class="brand-details-list content">
					<ul class="clearfix ul flex-cont flex-centerbox lists">
						<li v-for="data in hostProductList">
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
		<!--清仓特惠===============结束-->
		<!--人气单品===============开始-->
		
		<!--人气单品===============结束-->
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
			bannersList:[],//轮播
			inexpensiveList:[],//特惠
			hostProductList:[],//热门单品
		}
	},
	components:{
		"swipe":Swipe,
		"swipe-item":SwipeItem
	},
	mounted(){
			//https://img.wowdsgn.com/page/banners/0f9ee6a6-d1a4-47d2-9e0f-71ae3564aeaf_2dimension_1200x201.jpg 限时抢购
			//https://img.wowdsgn.com/page/banners/a334264e-eb30-4528-ac0e-a7939e06c685_2dimension_1200x718.jpg 新人专享
			//https://img.wowdsgn.com/page/banners/b14e21da-692f-45e8-94bc-4b0af9dbb601_2dimension_1200x685.jpg 茶杯
		fetch("/v2/page?pageId=1&tabId=10010&_=1523983952512",{credentials: 'include'}).then(res=>res.json()).then(res=>{
			console.log(Array.from(res.data.modules[0].moduleContent.banners))
			this.bannersList=Array.from(res.data.modules[0].moduleContent.banners);
//			this.innovativeDesignList=res.data.modules[1].moduleContent.products;
//			this.brandRecommendList=res.data.modules[2].moduleContent.products;
//			this.hostClassifyList=res.data.modules[3].moduleContent.products;
			this.inexpensiveList=res.data.modules[4].moduleContent.products;
			this.hostProductList=res.data.modules[5].moduleContent.products.splice(0,6);
		})
	}
}
</script>

<style lang="scss" scoped>
.wrap{
	width: 100%;
    background: #f5f5f5;
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
	}
	.page-module-banner{
		img{
			width: 100%;
		}
	}
	.banner-group-and-product-record {
	    background-color: #fff;
	    margin-bottom: 0.3rem;
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
		.banner-group-fixed-portrait{
			padding: 0.3rem 0.3rem 0rem;
			.banner {
			    padding-bottom: 0;
			    img{
			    		width: 100%;
			    }
			}
		}
	}
	.page-module-product-group-portrait{		
			margin-bottom: none;
		.page-module-title{
			padding: 0.26rem 0rem 0rem;
		}
		h1 {
		    font-weight: bold;
		    font-size: 0.36rem;
		    color: #333;
		    margin: 0.3rem 0;
		    text-align: center;
		}
		.brand-details-list{
			background: #fff; 
			overflow: hidden;
			.lists{
			    border-top: 1px solid #F5F5F5;
			    display: flex;
    				flex-flow: wrap;
    				width: 100%;
    				justify-content: left;
    				li:nth-of-type(even){
    					 border-right: none;
    				}
    				li {
				    float: left;
				    width: 49.7%;
				    height: 5.9rem;
				    border-bottom: 1px solid #F5F5F5;
				    border-right: 1px solid #F5F5F5;
				    img{
					    	width: 3.72rem;
					    	height: 3.72rem;
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
						    box-sizing: border-box;
						    -moz-box-sizing: border-box;
						    -webkit-box-sizing: border-box;
						    -o-box-sizing: border-box;
						    -ms-box-sizing: border-box;
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
		.page-module-more {
		    text-align: center;
		    padding: 0.3rem 0.4rem;
		    a {
			    font-size: 0.24rem;
			    color: #4A4A4A;
			    background: url(../../assets/HomeImg/right.png) no-repeat 70px;
			    background-size: 10%;
			    padding: 0.3rem;
			}
		}
	}
	
}
	.cancleMargin{
		margin-bottom: 0 !important;
	}
</style>