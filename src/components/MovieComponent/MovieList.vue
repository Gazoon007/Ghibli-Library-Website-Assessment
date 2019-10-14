<template>
	<div id="movie-list">
		<v-row class="myRow" data-aos="zoom-out" justify="center">
			<h1 class="display-3 font-weight-thin mb-4">The Movie List</h1>
		</v-row>
		<v-row class="myRow" infinite-wrapper>
			<app-movie :index="$index + 1" :key="$index" :movie="movie" data-aos="zoom-in" data-aos-duration="700"
					   v-for="(movie, $index) in showMovies"></app-movie>
		</v-row>
		<div style="overflow: auto">
			<infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
		</div>
	</div>
</template>

<script>
	import Movie from "@/components/MovieComponent/Movie";

	export default {
		components: {
			'appMovie': Movie,
		},
		computed: {
			showMovies() {
				return this.$store.getters.getList;
			}
		},
		methods: {
			infiniteHandler($state) {
				let payload = {
					url: '/films',
					stateHandler: $state
				};
				this.$store.dispatch('fetchList', payload);
			},
		}, destroyed(){
			setTimeout(()=> {
				this.$store.dispatch('clearList');
			}, 500);
		}
	}
</script>

<style scoped>
	.myRow {
		margin: 50px;
	}
</style>
