<template>
	<div>
		<v-row class="myRow" data-aos="zoom-out" justify="center">
			<h1 id="location-list" class="display-3 font-weight-thin mb-4">The Location List</h1>
		</v-row>
		<v-row class="myRow" infinite-wrapper>
			<app-location :index="$index + 1" :key="$index" :location="location" data-aos="zoom-in" data-aos-duration="700"
						v-for="(location, $index) in showLocation"></app-location>
		</v-row>
		<div style="overflow: auto">
			<infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
		</div>
	</div>
</template>

<script>
	import Location from "@/components/LocationComponent/Location";

	export default {
		components: {
			'appLocation': Location,
		},
		computed: {
			showLocation() {
				return this.$store.getters.getList;
			}
		},
		methods: {
			infiniteHandler($state) {
				let payload = {
					url: '/locations',
					stateHandler: $state
				};
				this.$store.dispatch('fetchList', payload);
			},
		}, destroyed() {
			this.$store.dispatch('clearList');
		}
	}
</script>

<style scoped>
	.myRow {
		margin: 50px;
	}
</style>
