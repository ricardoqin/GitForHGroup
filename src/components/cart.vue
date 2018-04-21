<template>
	<div class="cart">
		<div class="header">
			<img src="../assets/homelogo.png" alt="" @click="backhome">
			购物车
			<span alt="" @click = "edit">{{editName}}</span>
		</div>
		<div class="nosorts" v-if="!havesort">
			没有商品
		</div>

		<div class="allsorts" v-if="havesort">
			<div class="orders" v-for="data,index in sorts" >
				<div class="select">
					<i :class="judgeArr[index].isChoosed?'iconfont icon-gou':'iconfont icon-gouxuan'" @click="choose(index)"></i>
					<div class="count">
						<span class="reduce" @click="reduce(index)">-</span>
						<p>{{data.num}}</p>
						<span class="add" @click="add(index)">+</span>
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
						<li class="money">￥ {{data.price}}<span>x{{data.num}}</span></li>
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
				<li @click="isChooseAll">
					<i :class="chooseAll?'iconfont icon-gou':'iconfont icon-gouxuan'"></i>
					<span>全选</span>
				</li>
				<li v-if="!isEdit" class="totalMoney">合计：{{getTotalMoney}}</li>
				<li v-if="!isEdit" class="doCount">去结算</li>
				<li v-if="isEdit" class="delButton" @click="delSort">删除</li>
			</ul>
		</div>
		<backTop></backTop>
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
    	currentChoose:0,
    	judgeArr:[],
    	chooseAll:true,
    	havesort:false,
    	sorts:[],
    	totalMoney:0,
    	editName:'编辑',
    	isEdit:false,
    	page:1,
    	recommendList:[],
    	msg:'玩命加载中',

    }
  },
  components:{
  	backTop
  },
  computed:{
  	//计算总金额
  	getTotalMoney(){
  		this.totalMoney = 0;
  		for(var i in this.sorts){
  			if(this.judgeArr[i].isChoosed){
  				this.totalMoney += this.sorts[i].price * this.sorts[i].num;
  			}
  		}
  		return this.totalMoney;
  	}
  },
  methods:{

  	//回到首页
  	backhome(){
  		router.push('/home');
  	},
  	//点击编辑商品
  	edit(){
  		this.isEdit = !this.isEdit;
  		if(this.isEdit){
  			this.editName = '完成';
  			for(var i in this.judgeArr){
  				this.judgeArr[i].isChoosed = false
  			}
  			this.chooseAll = false;
  		}else{
  			this.editName = '编辑';
  			for(var i in this.judgeArr){
  				this.judgeArr[i].isChoosed = true
  			}
  			this.chooseAll = true;
  		}
  	},
  	//点击删除选中商品
  	delSort(){
  		for(var i=0;i<this.judgeArr.length;i++){
  			if(this.judgeArr[i].isChoosed){
  				this.sorts.splice(i,1);
  				i--;
  				localStorage.setItem('sort',JSON.stringify(this.sorts));
  			}
  			
  		}
/*  		if(this.chooseAll){
  			this.sorts=[];
  			localStorage.romoveItem('sort')
  		}*/
  		this.judgeArr[i].isChoosed = false


  	},
  	//点击减少商品数量
  	reduce(index){
  		if(this.sorts[index].num>1){
  			this.sorts[index].num--;
  			localStorage.setItem('sort',JSON.stringify(this.sorts));
  		}
  	},
  	//点击增加商品数量
  	add(index){
		this.sorts[index].num++;
		localStorage.setItem('sort',JSON.stringify(this.sorts));
  	},
  	//跳转详情页
  	jumpdetail(id){
  		router.push(`/detail/detail=${id}`);
  	},
  	//点击单个勾选
  	choose(index){
  		this.judgeArr[index].isChoosed = !this.judgeArr[index].isChoosed;
  		var i = this.judgeArr.every(function(item,index){
  			return item.isChoosed == true;
  		})
  		if(i){
  			this.chooseAll = true;
  		}else{
  			this.chooseAll = false;
  		}

  	},
  	//点击全选
  	isChooseAll(){
  		this.chooseAll = !this.chooseAll 
  		for(var i in this.judgeArr){
  			this.judgeArr[i].isChoosed = this.chooseAll;
  		}
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

  	//通过localStorage加载购物车商品
  	if(localStorage.sort){
  		this.havesort = true;
  		this.sorts = JSON.parse(localStorage.sort);
  		for(var i=0;i<this.sorts.length;i++){
  			this.judgeArr.push({num:i,isChoosed:true})
  		}
  	}

  	//加载推荐商品
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
				.money{
					span{
						float:right;
						font-size:0.2rem;
						margin-right:0.3rem;
						color: #808080
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
		li{
			float:left;
		    line-height: 1.04rem;
		    height:1.04rem;
			i{
				font-size:0.4rem;
			}
			&:first-of-type{
			    padding-left: 0.3rem;
			}
		}
		.totalMoney{
				width: 3.8rem;
				padding-right: 0.3rem;
				text-align: right;
		}
		.doCount{
		    font-size: 0.3rem;
		    float:right;
		    width: 1.95rem;
		    text-align: center;
		    background-color: #FFD444;
		}
		.delButton{
			float:right;
			width: 1.95rem;
		    font-size: 0.3rem;
		    background-color: #000;
		    text-align: center;
		    color: #fff;
		}
	}
}
</style>