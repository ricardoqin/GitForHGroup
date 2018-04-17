<template>
	<div>
		新品
		
	</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'home',

  data () {
    return {

    }
  },
  mounted(){
	  	axios.get("/v4/api/billboard/home?__t=1523895165695").then(res=>{
				console.log(res.data);

			}).catch(err=>{
				console.log(err);
			})
	    }
	}
</script>

<style lang="scss" scoped>
	p{
		font-size:0.74rem;
	}
</style>