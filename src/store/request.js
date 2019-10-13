import axios from "axios";

const state = {
	list: [],
	fetchIndex: 0,
};

const mutations = {
	storeList(state, list) {
		state.list.push(list);
	},
	storeFetchIndex(state) {
		state.fetchIndex += 3;
	},
	clearList(state) {
		state.list = [];
		state.fetchIndex = 0
	}
};

const actions = {
	fetchList({commit, state}, payload) {
		axios.get(payload.url).then(res => {
			console.log(res.data);
			if (state.fetchIndex < res.data.length) {
				for (let i = state.fetchIndex; i < state.fetchIndex + 3; i++) {
					if (i === res.data.length)
						break;
					commit('storeList', res.data[i]);
					payload.stateHandler.loaded();
				}
				commit('storeFetchIndex');
			} else {
				payload.stateHandler.complete();
			}
		}).catch(error => console.log(error))
	},
	clearList({commit}) {
		commit('clearList');
	}
};

const getters = {
	getList: state => {
		return state.list
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
