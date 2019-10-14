<template>
	<div id="species-list">
		<v-row class="myRow" data-aos="zoom-out" justify="center">
			<h1 class="display-3 font-weight-thin mb-4">The Species List</h1>
		</v-row>
		<v-row class="myRow" infinite-wrapper>
			<app-species :index="$index + 1" :key="$index" :species="species" data-aos="zoom-in" data-aos-duration="700"
						  v-for="(species, $index) in showSpecies"></app-species>
		</v-row>
		<div style="overflow: auto">
			<infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
		</div>
	</div>
</template>

<script>
	import Species from "@/components/SpeciesComponent/Species";

	export default {
		components: {
			'appSpecies': Species,
		},
		computed: {
			showSpecies() {
				return this.$store.getters.getList;
			}
		},
		methods: {
			infiniteHandler($state) {
				let payload = {
					url: '/species',
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
