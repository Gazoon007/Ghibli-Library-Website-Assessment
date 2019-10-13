<template>
	<div id="inspire">
		<app-jumbotron></app-jumbotron>
		<router-view></router-view>
	</div>
</template>

<script>
	import Jumbotron from "@/components/Jumbotron";
	import MovieList from "@/components/MovieComponent/MovieList";

	export default {
		components: {
			'appJumbotron': Jumbotron,
			'appMovieList': MovieList
		}
	}
</script>

<style scoped>
	#inspire {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		margin: 120px 0 0;
		padding: 0;
		overflow-x: hidden;
	}
</style>
