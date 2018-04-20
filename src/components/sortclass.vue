<template>
	<div class="sortclass">
		<backTop></backTop>
		<div class="header">
			<img src="../assets/homelogo.png" alt="" @click="backhome">
			{{currentsort}}
			<img src="../assets/backlogo.png" alt="" @click = "goback">
		</div>
		<div class="sortcl">
			<div v-for="data,index in currentsortclass" :key="currentsortid[index]" @click="change(index)"    :class="currentchoose == index?'active':''">
				<p>{{data}}</p>
			</div>
		</div>
		<div class="content">
			<div class="tab">
				<ul>
					<li v-for="data,index in chooselist"  ><a href="javascript:;" title="" @click="tabchange(index,data.chooseid)" :class="tabchoose==index?'ativetab':''">{{data.name}}</a></li>
				</ul>
			</div>
			<div class="sorts">
				<ul v-infinite-scroll="loadMore" 
			infinite-scroll-disabled="loading" 
			infinite-scroll-immediate-check = "false"
  		infinite-scroll-distance="10">
					<li v-for="data in sortlist" @click="jumpdetail(data.productId)">
						<img :src="data.productImg" alt="">
						<div class="cutword">
							<p class="protitle">{{data.productTitle}}</p>
						</div>
						
						<p class="proprice">￥{{data.originalPrice}}</p>
						<p class="proinfo">{{data.prizeOrSlogan}}</p>
					</li>
				</ul>
			</div>
			<div class="allover">
				{{msg}}
			</div>
		</div>
	</div>
</template>

<script>
import backTop from './backTop'
import router from '../router'
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);

export default {

  data () {
    return {
    	backTopSpeed:50,
    	classdata:[{'id':'20','title':'沙发','name':['All','多人沙发','单人沙发和休闲沙发'],'classid':['20','2010','2011']},{'id':'21','title':'椅凳','name':['All','餐椅','凳子'],'classid':['21','2110','2111']},{'id':'22','title':'桌几','name':['All','餐桌','茶几和边桌'],'classid':['22','2210','2211']},{'id':'23','title':'床','name':['All','床','靠垫抱枕'],'classid':['23','2310','2811']},{'id':'24','title':'储物','name':['All','电视柜','衣柜衣架'],'classid':['24','2410','2411']},{'id':'25','title':'灯具','name':['All','落地灯','吊灯'],'classid':['25','2510','2511']},{'id':'26','title':'用餐','name':['All','餐具','餐厅收纳'],'classid':['26','2610','2611']},{'id':'32','title':'时尚生活','name':['All','生活用品','首饰'],'classid':['32','3210','3211']},{'id':'33','title':'收纳','name':['All','床','靠垫抱枕'],'classid':['23','2310','2811']},{'id':'27','title':'烹饪','name':['All','锅具','厨房用具'],'classid':['27','2710','2711']},{'id':'28','title':'纺织品','name':['All','地毯','靠垫抱枕'],'classid':['28','2810','2811']},{'id':'29','title':'家饰','name':['All','时钟','墙饰'],'classid':['29','2910','2911']},{'id':'30','title':'儿童','name':['All','玩具','儿童家具'],'classid':['30','3010','3011']},{'id':'31','title':'卫浴','name':['All','卫浴收纳','浴室家具'],'classid':['31','3110','3111']},],
    	currentsortclass:[],
    	currentsortid:[],
    	currentclassid:0,
    	currentsort:0,
    	currentchoose:0,
    	chooselist:[{'chooseid':'onShelfTime','name':'上新'},{'chooseid':'sales','name':'销量'},{'chooseid':'price','name':'价格'}],
    	tabchoose:0,
    	sortlist:[],
    	chooserank:'onShelfTime',
    	pagenum:1,
    	loading:false,
    	msg:'玩命加载中...'


    }
  },
  components:{
  	backTop
  },
  methods:{
  	backhome(){
  		router.push('/home');
  	},
  	goback(){
  		router.push('/sortlist');
  	},
  	//点击切换样式更改分类
  	change(index){
  		this.currentchoose = index;
  		this.pagenum = 1;
  		this.loading = false;
  		this.chooserank = 'onShelfTime'
  		this.msg = '玩命加载中...';
  		axios.get(`/pages/category/${this.currentsortid[index]}?pageNumber=${this.pagenum}&orderBy=${this.chooserank}&sort=desc&_=1523941943444`).then(res=>{
  			this.sortlist = res.data.data.products;
  		}).catch(err=>{
  			console.log(err)
  		})
  	},

  	//显示内容条件切换
  	tabchange(index,chooserank){
  		this.tabchoose = index;
  		this.pagenum = 1;
  		this.loading = false;
  		this.chooserank = chooserank;
  		this.msg = '玩命加载中...';
  		axios.get(`/pages/category/${this.currentsortid[index]}?pageNumber=${this.pagenum}&orderBy=${this.chooserank}&sort=desc&_=1523941943444`).then(res=>{
  			this.sortlist = res.data.data.products;
  		}).catch(err=>{
  			console.log(err)
  		})
  	},
  	//下拉加载更多
  	loadMore() {
  		this.loading = true;
  		this.pagenum++;
  		if(this.pagenum>2){
			this.msg = '没有更多了';
			return;
		}
		axios.get(`/pages/category/${this.currentclassid}?pageNumber=${this.pagenum}&orderBy=${this.chooserank}&sort=desc&_=1523941943444`).then(res=>{
			console.log(1)
			this.sortlist = [...this.sortlist,...res.data.data.products];
			this.loading = false;	
	  	})
	},
	jumpdetail(id){
		router.push(`/detail/detail=${id}`)
	}
  },

  mounted(){

  	//选择加载商品类
  	const num = location.href.split('=')[1];
  	this.currentclassid = num;
  	for(var i in this.classdata){
  		if(this.classdata[i].id == num){
	  		this.currentsort = this.classdata[i].title;
	  		this.currentsortclass = this.classdata[i].name;
			this.currentsortid = this.classdata[i].classid;
	  	}
  	}
  	//进入页面请求数据加载页面
  	axios.get(`/pages/category/${this.currentclassid}?pageNumber=${this.pagenum}&orderBy=onShelfTime&sort=desc&_=1523941943444`).then(res=>{
  		this.sortlist = res.data.data.products;
  		// console.log(this.sortlist)
  	}).catch(err=>{
  		console.log(err)
  	})
  }


}
</script>

<style lang="scss" scoped>
	.sortclass{
		padding-bottom:44px;
	}
	.header{
		padding:15px;
	    height: 0.4rem;
	    line-height:0.4rem;
		font-size: 0.36rem;
		font-weight: 600;
		text-align:center;
		overflow: hidden;
		img{
			width: 0.52rem;
			&:first-of-type{
				float:left;
			}
			&:last-of-type{
				float:right;
			}
		}
	}
	.sortcl{
		height:1.9rem;
		background: url('../assets/sortclassbg.jpg') no-repeat left center;
		background-size: cover;
		padding:0.15rem;
		div{
			width: 1.6rem;
			height:1.6rem;
    		font-size: 0.26rem;
    		font-weight: 700;
    		color: #fff;
    		margin-left: 0.3rem;
    		text-align: center;
    		float:left;
    		word-wrap: break-word;
    		white-space: normal;
    		border: 1px solid rgba(255, 255, 255, 0.2);
		    display: flex;
		    justify-content: center;
		    align-items:center;
		    p{
		    	padding:0 5px;
		    }
		}
		.active{
    			background: rgba(255, 255, 255, 0.2);
    			border: 1px solid rgba(255, 255, 255, 1);
    	}
	}
	.content{
		.tab{
			ul{
				overflow:hidden;
				padding:15px;
				
				li{
					text-align: center;
					float:left;
					width:33%;
					font-size:0.3rem;
					a{
						color:#000;
						padding:13px;
					}
					.ativetab{
						border-bottom:0.06rem solid #202020;
					}
				}
			}
		}
		.sorts{
			ul{
				overflow:hidden;
				border-top: 2px solid #f5f5f5;
				li{
					width:49.8%;
					float:left;
					height:4.8rem;
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
					.protitle{
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
		}
	}

</style>