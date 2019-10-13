<template>
	<div>
		<v-row class="myRow" data-aos="zoom-out" justify="center">
			<h1 id="people-list" class="display-3 font-weight-thin mb-4">The People List</h1>
		</v-row>
		<v-row class="myRow" infinite-wrapper>
			<app-people :index="$index + 1" :key="$index" :people="people" data-aos="zoom-in" data-aos-duration="700"
						v-for="(people, $index) in showPeople"></app-people>
		</v-row>
		<div style="overflow: auto">
			<infinite-loading @infinite="infiniteHandler" force-use-infinite-wrapper="true"></infinite-loading>
		</div>
	</div>
</template>

<script>
	import People from "@/components/PeopleComponent/People";

	export default {
		components: {
			'appPeople': People,
		},
		computed: {
			showPeople() {
				return this.$store.getters.getList;
			}
		},
		methods: {
			infiniteHandler($state) {
				let payload = {
					url: '/people',
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
