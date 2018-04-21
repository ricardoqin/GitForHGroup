import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import axios from 'axios'

if(localStorage.sort){
	var arr = JSON.parse(localStorage.sort);
	var num = 0;
	for(var i=0;i<arr.length;i++){
		num += arr[i].num
	}
}else{
	var num = 0;
}
const store = new Vuex.Store({
	state:{
		buyNum:num
	},
	actions:{

	},
	mutations:{
		getBuyNum:function(state,payload){
			state.buyNum += payload;
		}
	}
})

export default store;