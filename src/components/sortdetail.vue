<template>
	<div>
		detail
	<div class="sortdetail" v-if="productinfo.length">
		<!-- 回到顶部 -->
		<backTop></backTop>

		<!-- 底部固定模块 -->
		<div class="bottomarea">
			<ul>
				<li>
					<i class="iconfont icon-favorites"></i>
					<i class="iconfont icon-cart"><span v-if="buyNum">{{buyNum}}</span></i>
				</li>
				<li @click="addToCart(chooseNum)">加入购物车</li>
				<li>立即购买</li>
			</ul>
		</div>
		<!-- 商品详情 -->
		<div class="header">
			<img src="../assets/homelogo.png" alt="" @click="backhome">
			商品详情
			<img src="../assets/backlogo.png" alt="" @click = "goback">
		</div>
		<div class="topImg">
			<img :src="`${sortinfomation.bigimg}?imageView2/1/w/375/h/300`" alt="">
		</div>
		<div class="protitle">
			<p>{{sortinfomation.title}}</p>
			<p>￥{{sortinfomation.price}}</p>
		</div>
		<!-- 商品小图片 -->
		<div class="smallImg" v-if="prosmallimg.length">
			<div class="swiper-container">
				<ul class="swiper-wrapper">
					<li v-for="data in prosmallimg" class="swiper-slide">
						<img :src="`${data.productImg}?imageslim`" alt="">
						<p>{{data.specDesc}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- 选择商品信息 -->
		<div class="choosedinfo">
			<div class="infolist">
				<span>已选</span>
				<div class="sortsize">
					<p>“{{sortinfomation.spec}}{{sortinfomation.attrname}}”{{chooseNum}}件</p>
					<p>尺寸：L{{sortinfomation.L}}*W{{sortinfomation.W}}*H{{sortinfomation.H}}cm重量：{{sortinfomation.weight}}kg</p>
				</div> 
			</div>
			<!-- <div v-for="data,index in selectioninfo.attributes" class="infolist">
				<span>{{data.attributeName}}</span>
				<div class="infowrap">
					<p v-for="data1,index1 in data.attributeValues" :class="(currentlist1==index || currentlist2==index1)?'choosedcolor':''" @click="clickToChoose(index,index1)">{{data1}}</p>
				</div>
			</div> -->
			<div class="infolist">
				<span>{{selectioninfo.attributes[0].attributeName}}</span>
				<div class="infowrap">
					<p v-for="data,index in selectioninfo.attributes[0].attributeValues" :class="currentlist1==index ?'choosedcolor':''" @click="clickToChoose1(index,data)">{{data}}</p>
				</div>
			</div>
			<div class="infolist" v-if="selectioninfo.attributes[1]">
				<span>{{selectioninfo.attributes[1].attributeName}}</span>
				<div class="infowrap">
					<p v-for="data,index in selectioninfo.attributes[1].attributeValues" :class="currentlist2==index ?'choosedcolor':''" @click="clickToChoose2(index,data)">{{data}}</p>
				</div>
			</div>
			<div class="infolist">
				<span>数量</span>
				<div class="count">
					<span class="reduce" @click="chooseNum==1?1:chooseNum--">-</span>
					<p>{{chooseNum}}</p>
					<span class="add" @click="chooseNum++">+</span>
				</div>
			</div>
		</div>

		<!-- 商品相关介绍 -->
		<div class="designer">
			<div class="location" v-if="productinfo.brandAndDesigner[0].country">
				<img src="../assets/locationicon.png" alt="">
				{{productinfo.brandAndDesigner[0].country}}
			</div>
			<img :src="`${productinfo.brandAndDesigner[0].img}?imageslim`" class="designerlogo">
			<p class="name">{{productinfo.brandAndDesigner[0].name}}</p>
			<p class="describe">{{productinfo.brandAndDesigner[0].desc}}</p>
			<p class="readall">阅读全文&nbsp;&nbsp;&gt;</p>
		</div>

		<div class="productIntroduction">
			<h3 class="sellingPoint">{{productinfo.sellingPoint}}</h3>
			<div class="introductionList" v-for="data in productInfomations">
				<h3 v-if="data.type==0">{{data.content}}</h3>
				<p v-if="data.type==1">{{data.content}}</p>
				<img :src="`${data.content}?imageslim`" alt="" v-if="data.type==2">
			</div>
		</div>
		<div v-if="productSwiperImg.length" class="proswiperImg">
			<img :src="`${productSwiperImg[0].imageUrl}?imageslim`" alt="" style="width:100%">
		</div>

		<div class="detailData careful">
			<span>详细参数规格</span>
			<i>&gt;</i>
		</div>
		<div class="attentions careful">
			<span>温馨提示</span>
			<i>&gt;</i>
		</div>
		<!-- 大家都在看 -->
		<div class="peopleSee">
			<p>- 大家都在看 -</p>
			<ul>
				<li v-for="data in peopleSeeList" @click="jumpdetail(data.productId)">
					<img :src="data.productImg" alt="">
					<div class="cutword">
						<p class="proTitle">{{data.productTitle}}</p>
					</div>
					<p class="proprice">￥{{data.originalPrice}}</p>
					<p class="proinfo">{{data.prizeOrSlogan}}</p>
				</li>
			</ul>
		</div>
		<div class="needHelp">
			<span>需要帮助</span>
			<span>周一至周五 9:00~18:30</span>
			<img src="../assets/icon-service.png" alt="">
		</div>
	</div>
</template>

<script>       
import axios from 'axios';
import router from '../router';
import backTop from './backTop';
import detailImgSwiper from './detailImgSwiper';
import { Swipe, SwipeItem } from 'mint-ui'
import {mapState} from 'Vuex'

export default {

  data () {
    return {
    	productinfo:[],
    	prosmallimg:[],
    	selectioninfo:[],
    	chooseNum:1,
    	chooseWhich:[],
    	currentlist1:0,
    	currentlist2:0,
    	sortinfomation:{},
    	productInfomations:[],
    	productSwiperImg:[],
    	peopleSeeList:[],
    	serviceTime:''
    }
  },
  components:{
  	backTop,
  	detailImgSwiper,
  	'mt-swipe':Swipe,
  	'mt-swipe-item':SwipeItem
  },
  methods:{
  	addToCart(num){
  		this.$store.commit('getBuyNum',num);
  	},
  	backhome(){
  		router.push('/home');
  	},
  	goback(){
  		router.push('/sortlist');
  	},
  	clickToChoose1(index,data){
  		this.currentlist1 = index;
  		for(var i =0;i<this.chooseWhich.products.length;i++){
  			if(this.chooseWhich.products[i].productTitle.indexOf(data)!=-1){
				this.sortinfomation = {
			  		'bigimg':this.chooseWhich.products[i].productImg,
			  		'title':this.chooseWhich.products[i].productTitle,
			  		'price':this.chooseWhich.products[i].originalPrice,
			  		'spec':this.chooseWhich.products[i].attributes[0].attributeValue,
			  		'attrname':this.sortinfomation.attrname,
			  		'L':this.chooseWhich.products[i].length,
			  		'W':this.chooseWhich.products[i].width,
			  		'H':this.chooseWhich.products[i].height,
			  		'weight':this.chooseWhich.products[i].netWeight,
			  		'sortId':this.chooseWhich.products[i].productId || this.sortinfomation.sortId
		  		}
  			}
  		}

  	},
  	clickToChoose2(index,data){
  		this.currentlist2 = index;
  		for(var i =0;i<this.chooseWhich.products.length;i++){
  			if(this.chooseWhich.products[i].productTitle.indexOf(data)!=-1){
  				if(this.chooseWhich.products[i].attributes.length==2){
  					var attrname = this.chooseWhich.products[i].attributes[1].attributeValue
  				}else{
  					attrname = ''
  				}
				this.sortinfomation = {
			  		'bigimg':this.chooseWhich.products[i].productImg,
			  		'title':this.chooseWhich.products[i].productTitle,
			  		'price':this.chooseWhich.products[i].originalPrice,
			  		'spec':this.sortinfomation.spec,
			  		'attrname':attrname,
			  		'L':this.chooseWhich.products[i].length,
			  		'W':this.chooseWhich.products[i].width,
			  		'H':this.chooseWhich.products[i].height,
			  		'weight':this.chooseWhich.products[i].netWeight,
			  		'sortId':this.chooseWhich.products[i].productId || this.sortinfomation.sortId
		  		}
  			}
  		}
  	},
  	jumpdetail(id){
  		router.push(`/detail/detail=${id}`)
  	}
  },
  mounted(){
  	const productId = location.href.split('=')[1];
  	Promise.all([axios.get(`/product/info?skuId=${productId}`),axios.get(`/product/imgs?skuId=${productId}`),axios.get(`/product/selection?skuId=${productId}`)]).then(res=>{
  		this.productinfo = res[0].data.data;
  		this.prosmallimg = res[1].data.data;
  		this.selectioninfo = res[2].data.data;
  		if(res[2].data.data.attributes.length==2){
  			var attrname = res[2].data.data.attributes[1].attributeValues[0]
  		}else{
  			attrname = ''
  		}
  		this.sortinfomation = {
    		'bigimg':this.productinfo.productImg,
    		'title':this.productinfo.productTitle,
    		'price':this.productinfo.originalPrice,
    		'spec':this.selectioninfo.attributes[0].attributeValues[0],
    		'attrname':attrname,
    		'L':this.productinfo.length,
    		'W':this.productinfo.width,
    		'H':this.productinfo.height,
    		'weight':this.productinfo.netWeight,
    		'sortId':this.productinfo.productId
    	}
  	})

  	axios.get(`/product/selection?skuId=${productId}`).then(res=>{
  		this.chooseWhich = res.data.data;
  	})
  	axios.get(`/product/infomations?skuId=${productId}`).then(res=>{
  		this.productInfomations = res.data.data.introductions;
  		this.productSwiperImg = res.data.data.sizeImages
  	})
  	axios.get(`/recommend/item?skuId=${productId}`).then(res=>{
  		this.peopleSeeList = res.data.data;
  	})
  },

  updated(){
  	var mySwiper = new Swiper ('.swiper-container', {
  		slidesPerView:4
  	  }) 
  },
  computed:{
  	...mapState(['buyNum'])
  }
}
</script>

<style lang="scss" scoped>
.sortdetail{
	background-color: #f5f5f5;
	font-family: 'Microsoft YaHei';
	padding-bottom: 0.88rem;
}
	.bottomarea{
		position: fixed;
		z-index: 1;
		bottom:0;
		width:100%;
		font-size:0.3rem;
		ul{
			li{
				float:left;
				width:33.3%;
				text-align:center;
				height:0.88rem;
				line-height:0.88rem;
				i{
					margin:0 0.15rem;
					font-size:0.4rem;
					position:relative;
					span{
						display:inline-block;
						text-align: center;
					    width: 0.35rem;
    					height: 0.35rem;
						position:absolute;
						border-radius:50%;
						background-color: #FFD444;
						font-size:0.1rem;
						line-height:0.35rem;
						top:-0.15rem;
						right:-0.15rem;
					}
				}
				&:first-of-type{
					background-color: #fff;
				}
				&:nth-of-type(2){
					background-color: #f5f5f5;
				}
				&:last-of-type{
					background-color: #FFD444;
				}
			}
		}
	}
	.header{
		padding:12px;
	    height: 0.4rem;
	    line-height:0.4rem;
		font-size: 0.38rem;
		font-weight: 600;
		
		text-align:center;
		overflow: hidden;
	    border-bottom: 1px solid #f5f5f5;
	    background-color: #fff;
		img{
			width: 0.55rem;
			&:first-of-type{
				float:left;
			}
			&:last-of-type{
				float:right;
			}
		}
	}
	.topImg{
		width:100%;
		height:6rem;
	    margin-bottom: 0.3rem;

	    img{
	    	width:100%;
	    	height:100%;
	    }
	}
	.protitle{
		padding: 0.2rem 0.5rem 0.1rem;
		background-color: #fff;
		font-size:0.32rem;
		p{
			margin:0.3rem 0;
			width:5rem;
			&:last-of-type{
				font-weight: 600;
			}
		}
	}
	.smallImg{
		height:2.06rem;
		background-color: #fff;
		margin: 0.3rem 0;
		padding:0.2rem 0;
		ul{
			li{
				float:left;
				img{
					width: 1.6rem;
				    height: 1.6rem;
				    margin: 0 auto;
				}
				p{
					font-size: 0.22rem;
				    color: #C1C0C6;
			        border-right: 1px solid #EAEAEA;
			        text-align: center;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				}
			}
		}
	}
	.choosedinfo{
		padding: 0.427rem 0.4rem;
    	background: #fff;
    	color: gray;
    	.infolist{
    		margin-bottom: 0.3rem;
    		overflow:hidden;
    	}
    	.sortsize{
    		width: 5.8rem;
    		font-size:0.26rem;
    		float:right;
    		p:first-of-type{
    			color:#000;
    		}
    		p:last-of-type{
    			font-size:0.22rem;
    		}
    	}
    	span{
    		color: #707070;
		    font-size: 0.26rem;
		    vertical-align: top;
		    float:left;
    	}
    	.infowrap{
		    width: 5.8rem;
		    float:right;
		    line-height: 1.5em;
		    font-size: 0.26rem;
		    overflow:hidden;
		    p{
    			font-size: 0.28rem;
    			float: left;
    			padding: 0.15rem 0.22rem;
			    background-color: #F5F5F5;
			    margin-bottom: 0.2rem;
			    margin-right: 0.2rem;
		    }
		    .choosedcolor{
	    	    background-color: #FFD444;
	    	    color:#000;
		    }
    	}
    	.count{
    		height:0.6rem;
    		float:right;
    		width: 5.8rem;
    		span{
    			text-align: center;
    			float:left;
    			width:0.6rem;
    			height:0.6rem;
    			line-height:0.6rem;
    			background-color: #F5F5F5;
    		}
    		p{
    			text-align: center;
    			float:left;
    			width:1.5rem;
    			font-size:0.26rem;
    			line-height:0.6rem;
    			color:#000;
    		}
    	}

	}
	.designer{
	    background: url('../assets/designer.png') no-repeat left top;
	    background-size: cover;
	    padding: 0.4rem 0.5rem 0.5rem;
	    height: 6.14rem;
	    position: relative;
	    color:#fff;
	    .location{
	    	text-align: right;
	    	font-size:0.26rem;
	    	img{
	    		display: inline-block;
	    		vertical-align: middle;
	    		width:0.4rem;
	    		height:0.4rem;
	    	}
	    }
	    .designerlogo{
	    	width: 1.3rem;
		    height: 1.3rem;
		    border-radius: 100%;
		    margin: 0.5rem auto 0.3rem;
	    }
	    .name{
	    	font-size:0.28rem;
	    	text-align: center;
	    	margin-bottom:0.3rem;
	    }
	    .describe{
	    	font-size: 0.26rem;
    	    color: #FFFFFF;
    	    line-height: 0.4rem;
    	    margin-bottom: 0.3rem;
    	    //移动端多行文本超出省略号
    	    overflow: hidden;
    	    text-overflow: ellipsis;
    	    display: -webkit-box;
    	    -webkit-line-clamp: 4;
    	    -webkit-box-orient: vertical;
	    }
	    .readall{
	    	margin-top:1rem;
	    	text-align: right;
	    	font-size:0.28rem;
	    }

	}
	.productIntroduction{
	    padding: 0.6rem 0rem 0rem;
		.sellingPoint{
			font-size:0.43rem;
			text-align: center;
			line-height: 0.6rem;
			font-weight: 100;
			margin: 0 0 0.1rem 0;
		    padding: 0 0.5rem;
		}
		.introductionList{
			h3{
				font-size: 0.32rem;
			    color: #000;
			    letter-spacing: 0.01rem;
			    text-align: center;
			    margin-bottom: 0.1rem;
			    padding: 0 0.5rem;
			    font-weight:100;
			}
			p{
				font-size: 0.26rem;
				color: #707070;
				margin-bottom: 0.3rem;
				padding: 0 0.5rem;
			}
			img{
				width:100%;
			    margin: 0.3rem auto;
			}
		}
	}
	.careful{
		overflow:hidden;
		font-size: 0.32rem;
		background: #fff;
		color: #000000;
		margin-top:0.4rem;
		padding: 0.4rem 0.5rem;
		span{ 
		    text-align: left;
		    line-height:0.32rem;
		}
		i{
			font-style:normal;
			float:right;
		}
	}
	.peopleSee{
		background-color: #fff;
		p{
			font-size: 0.32rem;
			text-align: center;
			color: #000;
			padding: 0.4rem 0;
			margin-top:0.4rem;
		}
		ul{
			overflow:hidden;
			border-top: 2px solid #f5f5f5;
			li{
				width:49.8%;
				height:4.8rem;
				float:left;
				padding-bottom:0.3rem;
				&:nth-of-type(odd){
					border-right: 1px solid #f5f5f5;
					border-bottom: 1px solid #f5f5f5;
				}
				&:nth-of-type(even){
					border-bottom: 1px solid #f5f5f5;
				}
				img{
					height: 3.71rem;
				}
				.cutword{
					width:88%;
				}
				p{
					margin:3px 0 3px 0.3rem;
					width:100%;
				}
				.proTitle{
					color: #808080;
				    font-size: 0.25rem;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    width: 100%;
				}
				.proprice{
					font-size: 0.26rem;
				    color: #000;
				    /* margin-bottom: 0.05rem; */
				    margin-right: 0.1rem;
				    margin-left: 0.3rem;
				}
				.proinfo{
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
	.needHelp{
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		background: #fff;
		font-size:0.2rem;
		margin: 0.3rem 0;
		text-align: left;
		span{
			float:left;
			color: #000;
			margin-right: 0.2rem;
			margin-left: 0.5rem;
			&:last-of-type{
				color: #FF7070;
			}
		}
		img{
			float:right;
			width:0.6rem;
			margin-top:0.3rem;
			margin-right:0.8rem;
		}
	}


</style>