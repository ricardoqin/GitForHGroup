<template>
	<div class="sortlist">
		<div class="search">
			<img src="../assets/searchlogo.png" alt="">
			<input type="text" placeholder="搜索我的尖叫好物">
		</div>
		<div class="tab">
			<div class="tab-1">
				<a href="#" title="">
					<img src="../assets/furniture.png" alt="">
				</a>
				<ul class="tab-1-list">
					<li @click="handleClick(20)">
						<span class="span1">沙发</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(21)">
						<span class="span1">椅凳</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(22)">
						<span class="span1">桌几</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(23)">
						<span class="span1">床</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(24)">
						<span class="span1">储物</span>
						<span class="span2">&gt;</span>
					</li>
				</ul>
			</div>
			<div class="tab-2">
				<a href="#" title="">
					<img src="../assets/household.png" alt="">
				</a>
				<ul class="tab-2-list">
					<li @click="handleClick(25)">
						<span class="span1">灯具</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(26)">
						<span class="span1">用餐</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(32)">
						<span class="span1">时尚生活</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(23)">
						<span class="span1">收纳</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(27)">
						<span class="span1">烹饪</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(28)">
						<span class="span1">纺织品</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(29)">
						<span class="span1">家饰</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(30)">
						<span class="span1">儿童</span>
						<span class="span2">&gt;</span>
					</li>
					<li @click="handleClick(31)">
						<span class="span1">卫浴</span>
						<span class="span2">&gt;</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {

  data () {
    return {
    }
  },
  methods:{
  	handleClick(sortclass){
  		router.push(`/sortlist/sortclass=${sortclass}`);
  	}
  }
  
}
</script>

<style lang="scss" scoped>
.sortlist{
	font-family: 'Microsoft YaHei';
	padding:15px;
	.search{
		background-color: #F5F5F5;
		border-radius: 0.3rem;
	    width: 5.4rem;
	    height: 0.58rem;
	    line-height: 0.58rem;
	    margin-bottom: 0.3rem;
		img{
			float:left;
			width:0.4rem;
			margin:0.1rem;
		}
		input{
			float:left;
			background-color: #F5F5F5;
			height: 0.56rem;
			margin-top:0.01rem;
			outline:none;
		}
	}
	.tab{
		a{
			height:127px;
			img{
				width:100%;
				margin-top:10px;
			}
		}
		li{
			padding:0px 0px 20px 10px;
			overflow: hidden;
			line-height: 54px;
			height:34px;
			font-size:0.3rem;
			border-bottom: 1px solid #eaeaea;

			.span1{
				float:left;
			}
			.span2{
				float:right;
				font-size:28px;
				color: #ccc;
				font-family: '宋体';
			}
		}
	}
}
</style>