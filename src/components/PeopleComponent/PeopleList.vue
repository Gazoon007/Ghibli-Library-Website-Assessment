<template>
	<div>
		<v-row class="myRow" data-aos="zoom-out" justify="center">
			<h1 class="display-3 font-weight-thin mb-4">The People List</h1>
		</v-row>
		<v-row class="myRow">

		</v-row>
		<div style="overflow: auto">
			<infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
		</div>
	</div>
</template>

<script>
	// import People from "@/components/PeopleComponent/People";

	export default {
		// components: {
		// 	'appPeople': People,
		// },
		computed: {
			showMovies() {
				return this.$store.getters.getMovies;
			}
		},
		methods: {
			infiniteHandler($state) {
				this.$store.dispatch('fetchMovies', $state);
			},
		},
	}
</script>

<style scoped>

</style>
