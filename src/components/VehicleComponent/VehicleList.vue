<template>
	<div>
		<v-row class="myRow" data-aos="zoom-out" justify="center">
			<h1 id="vehicle-list" class="display-3 font-weight-thin mb-4">The Vehicle List</h1>
		</v-row>
		<v-row class="myRow" infinite-wrapper>
			<app-vehicle :index="$index + 1" :key="$index" :vehicle="vehicle" data-aos="zoom-in" data-aos-duration="700"
						 v-for="(vehicle, $index) in showVehicle"></app-vehicle>
		</v-row>
		<div style="overflow: auto">
			<infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
		</div>
	</div>
</template>

<script>
	import Vehicle from "@/components/VehicleComponent/Vehicle";

	export default {
		components: {
			'appVehicle': Vehicle,
		},
		computed: {
			showVehicle() {
				return this.$store.getters.getList;
			}
		},
		methods: {
			infiniteHandler($state) {
				let payload = {
					url: '/vehicles',
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
