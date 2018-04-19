<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper" style="height:5.2rem" >
	    	<slot></slot>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
export default {

  name: 'detailImgSwiper',

  data () {
    return {

    }
  },
  mounted(){
	var swiper = new Swiper('.swiper-container',{
	    autoplay:2000,
	    loop:true,
	    paginationClickable: true
	})
  }
}
</script>

<style lang="scss" scoped>
</style>