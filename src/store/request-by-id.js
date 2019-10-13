import axios from "axios";

const state = {
	information: {
		species: [],
		locations: [],
		people: [],
		vehicles: [],
	},
};

const mutations = {
	storeInformation(state, payload) {
		if (payload.url.includes('species') && payload.name !== undefined)
			state.information.species.push(payload.name);
		else if (payload.url.includes('people') && payload.name !== undefined)
			state.information.people.push(payload.name);
		else if (payload.url.includes('vehicles') && payload.name !== undefined)
			state.information.people.push(payload.name);
		else if (payload.url.includes('locations') && payload.name !== undefined)
			state.information.people.push(payload.name);
	},
	clearInformation(state) {
		state.information = {
			species: [],
			locations: [],
			people: [],
			vehicles: [],
		};
	}
};

const actions = {
	fetchInformation({commit, state}, payload) {
		for (let i = 0; i < payload.length; i++) {
			let url = payload[i].toString().replace('https://ghibliapi.herokuapp.com', '');
			axios.get(url).then(res => {
				commit('storeInformation', {name: res.data.name, url: url})
			}).catch(error => console.log(error))
		}
	},
	clearInformation({commit}) {
		commit('clearInformation');
	}
};

const getters = {
	getInformation: (state) => (target) => {
		if (target === 'species') {
			return state.information.species.join(', ');
		}
		if (target === 'people') {
			return state.information.people.join(', ');
		}
		if (target === 'vehicles') {
			return state.information.vehicles.join(', ');
		}
		if (target === 'locations') {
			return state.information.locations.join(', ');
		}
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
