/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import request from "@/store/request";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		request
	}
})
