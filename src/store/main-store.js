/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import films from "@/store/films";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		films
	}
})
