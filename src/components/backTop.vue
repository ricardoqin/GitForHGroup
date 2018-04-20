<template>
	<div class="backTop" v-if="showBackTop" @click="backTop(backTopSpeed)">
		<img src="../assets/backTop.png" alt="">
	</div>
</template>

<script>
export default {

  name: 'backTop',

  data () {
    return {
    	showBackTop:false,
    	backTopSpeed:16,
    	showDistentce:800
    }
  },
  methods:{
  	//判断回到顶部图标是否显示
  	handleScroll(){
  		if(document.body.scrollTop>this.showDistentce || document.documentElement.scrollTop>this.showDistentce){
  			return this.showBackTop = true;
  		}else{
  			return this.showBackTop = false;
  		}
  	},
	//点击顶部
	backTop(i){
		document.body.scrollTop -= document.body.scrollTop/i;
		document.documentElement.scrollTop -=document.documentElement.scrollTop/i;
      if (document.body.scrollTop || document.documentElement.scrollTop) {
          var c=setTimeout(()=>this.backTop(i),16);
      }else {
          clearTimeout(c);
      }
	}
  },
  mounted(){
  	//添加鼠标滚动事件
  	window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.backTop{
		position: fixed;
	    right: 0.5rem;
	    bottom: 1.2rem;
	    z-index: 998;
	    width: 0.7rem;
	    height: 0.7rem;
		img{
			width: 0.7rem;
	    	height: 0.7rem;
		}
}
</style>