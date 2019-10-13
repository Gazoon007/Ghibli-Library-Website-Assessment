import axios from "axios";

const state = {
	movies: [],
	movieFetchingIndex: 0,
};

const mutations = {
	storeMovies(state, movie) {
		console.log(movie);
		state.movies.push(movie);
	},
	storeFetchingIndex(state) {
		state.movieFetchingIndex += 3;
	},
};

const actions = {
	fetchMovies({commit, state}, $state) {
		axios.get('/films').then(res => {
			if (state.movieFetchingIndex < res.data.length) {
				for (let i = state.movieFetchingIndex; i < state.movieFetchingIndex + 3; i++) {
					if (i === res.data.length)
						break;
					commit('storeMovies', res.data[i]);
					$state.loaded();
				}
				commit('storeFetchingIndex');
			} else {
				console.log(res.data);
				$state.complete();
			}
		}).catch(error => console.log(error))
	},
};

const getters = {
	getMovies: state => {
		return state.movies
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
