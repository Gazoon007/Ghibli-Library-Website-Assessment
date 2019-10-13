/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import request from "@/store/request";
import requestById from "@/store/request-by-id";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		request,
		requestById
	}
})
