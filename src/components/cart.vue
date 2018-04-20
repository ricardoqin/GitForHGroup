<template>
	<div class="cart">
		<div class="header">
			<img src="../assets/homelogo.png" alt="" @click="backhome">
			购物车
			<span alt="" @click = "edit">编辑</span>
		</div>

		<div class="nosorts" v-if="!havesort">
			没有商品
		</div>

		<div class="allsorts" v-if="havesort">
			<div class="orders" v-for="data in sorts" >
				<div class="select">
					<i class="iconfont icon-gou"></i>
					<div class="count">
						<span class="reduce">-</span>
						<p>{{data.num}}</p>
						<span class="add" >+</span>
					</div>
				</div>
				<div class="sort">
					<img :src="data.imgsrc" alt="">
					<ul class="sortinfo">
						<li class="title">{{data.title}}</li>
						<li class="attr">
							<span>{{data.spec}}</span>
							<span v-if="data.attrname">{{data.attrname}}</span>
						</li>
						<li></li>
						<li class="money">￥ {{data.price}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="recommend">
			<p class="allpeoplesee">- 为您推荐 -</p>
			<ul v-infinite-scroll="loadMore" 
			infinite-scroll-disabled="loading" 
			infinite-scroll-immediate-check = "false"
  		infinite-scroll-distance="80">
				<li v-for="data in recommendList" @click="jumpdetail(data.productId)">
					<img :src="data.productImg" alt="">
					<div class="cutword">
						<p class="proTitle">{{data.productTitle}}</p>
					</div>
					<p class="proprice">￥{{data.originalPrice}}</p>
					<p class="proinfo">{{data.prizeOrSlogan}}</p>
				</li>
			</ul>
		</div>
		<div class="allover">
			{{msg}}
		</div>
		<div class="footer">
			<ul>
				<li>
					<i class="iconfont icon-gou"></i>
					<span>全选</span>
				</li>
				<li>合计：</li>
				<li>去结算</li>
			</ul>
		</div>
		<backTop></backTop>
		
<!-- 		<i class="iconfont icon-gouxuan"></i> -->
	</div>
</template>

<script>

import axios from 'axios'
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
import router from '../router';
import backTop from './backTop';

export default {
  data () {
    return {
    	havesort:false,
    	sorts:[],
    	page:1,
    	recommendList:[],
    	msg:'玩命加载中'
    }
  },
  components:{
  	backTop
  },
  methods:{
  	backhome(){
  		router.push('/home');
  	},
  	edit(){
  	},
  	jumpdetail(id){
  		router.push(`/detail/detail=${id}`);
  	},
  	//下拉加载更多
  	loadMore() {
  		this.loading = true;
  		this.page++;
  		if(this.page>10){
			this.msg = '没有更多了';
			return;
		}
		axios.get(`recommend/cart?currentPage=${this.page}&_=1524225079781`).then(res=>{
			this.recommendList = [...this.recommendList,...res.data.data];
			this.loading = false;	
	  	})
	}
  },
  mounted(){
  	if(localStorage.sort){
  		this.sorts = JSON.parse(localStorage.sort);
  		this.havesort = true;
  	}
	axios.get(`recommend/cart?currentPage=${this.page}&_=1524225079781`).then(res=>{
		this.recommendList = res.data.data;
  	})
  }
}
</script>

<style lang="scss" scoped>
.cart{
	background-color: #f5f5f5;
	font-family: 'Microsoft YaHei';
	padding-bottom: 0.88rem;
	.header{
		padding:12px;
	    height: 0.4rem;
	    line-height:0.4rem;
		font-size: 0.36rem;
		font-weight: 600;
		
		text-align:center;
		overflow: hidden;
	    border-bottom: 1px solid #f5f5f5;
	    background-color: #fff;
		img{
			width: 0.55rem;
			float:left;
		}
		span{
			float:right;
			font-weight: 100;
			font-size:0.32rem;
		}
	}
	.allsorts{
		background-color: #fff;
		padding-left:0.3rem;
		.orders{
			.select{
				height: 1rem;
				line-height:1rem;
				border-bottom: 1px solid #f5f5f5;
				border-top: 1px solid #f5f5f5;
				i{
					float:left;
					font-size:0.4rem;
				}
				.count{
					float:right;
					text-align: center;
					font-size:0.24rem;
					margin-right:0.4rem;
					margin-top:0.2rem;
					line-height:0.5rem;
					span{
						float:left;
						width:0.5rem;
						height:0.5rem;
						background-color: #F5F5F5;
					}
					p{
						float:left;
						width:0.6rem;
						color:#000;
					}
				}
			}
		}
		.sort{
			overflow:hidden;
			padding: 0.3rem 0.3rem 0.3rem 0rem;
			border-bottom: none;
			position: relative;
			img{
				width:1.6rem;
				float:left;
				margin-top:0.08rem;
				margin-left:0.4rem;
			}
			.sortinfo{
				float:left;
				li{
					width:4.9rem;
				    margin-bottom: 0.08rem;
				    height: 0.44rem;
			        line-height: 0.44rem;
			        font-size: 0.28rem;
			        overflow: hidden;
			        white-space: nowrap;
			        text-overflow: ellipsis;
				}
				.attr{
					span{
						background: #f5f5f5;
						margin-right: 0.06rem;
						font-size: 0.2rem;
						color: #808080;
						padding: 0.04rem 0.1rem;
					}
				}
			}
		}
	}
	.recommend{
		background-color: #fff;
		p{
			font-size: 0.32rem;
			color: #000;
			margin-top:0.4rem;

		}
		.allpeoplesee{
			text-align: center;
			padding:0.4rem 0;
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
	.allover{
		height: 50px;
		font-size: 12px;
	    line-height: 50px;
	    text-align: center;
	    border-bottom: 2px solid #f5f5f5;
	    background-color: #fff;
	    margin-bottom:0.3rem;
	}
	.footer{
		position: fixed;
		bottom:0;
		width:100%;
		height:1.04rem;
		background-color: #fff;
		font-size:0.28rem;
		border-top: 1px solid #f5f5f5;
		display:table;
		vertical-align: middle;
		li{
			display: table-cell;
		    vertical-align: middle;
		    height:1.04rem;
			i{
				font-size:0.4rem;
			}
			&:first-of-type{
				width: 1.44rem;
			    padding-left: 0.3rem;
			}
			&:nth-of-type(2){
				width: 4.36rem;
				padding-right: 0.3rem;
				text-align: right;
			}
			&:last-of-type{
			    font-size: 0.3rem;
			    width: 1.95rem;
			    text-align: center;
			    background-color: #FFD444;
			}
		}
	}
	
}
</style>