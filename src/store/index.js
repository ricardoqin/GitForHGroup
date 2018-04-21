import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import axios from 'axios'

const store = new Vuex.Store({
	state:{

		buyNum:0
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