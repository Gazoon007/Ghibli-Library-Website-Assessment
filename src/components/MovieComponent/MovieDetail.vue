<template>
	<div class="text-center">
		<v-dialog
				max-width="600"
				v-model="dialog"
				width="400"
		>

			<v-card>
				<v-card-title
						class="headline light-blue lighten-1 white--text"
						primary-title
				>
					Information Detail
				</v-card-title>

				<v-card-text style="margin-top: 20px">
					<p><b>Title&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;: </b>{{movie.title}}</p>
					<p><b>Director&emsp;&emsp;&emsp;&emsp;: </b>{{movie.director}}</p>
					<p><b>Producer&emsp;&emsp;&emsp;&ensp;: </b>{{movie.producer}}</p>
					<p><b>Release Date&ensp;&ensp;&ensp; : </b>{{movie.release_date}}</p>
					<p><b>RT Score&emsp;&emsp;&emsp;&ensp; : </b>{{movie.rt_score}}</p>
					<p><b>Species&emsp;&emsp;&emsp;&emsp; : </b>{{retrieveSpeciesInformation | ifIsNull}}</p>
					<p><b>People&emsp;&emsp;&emsp;&emsp;&ensp; : </b>{{retrievePeopleInformation | ifIsNull}}</p>
					<p><b>Locations&emsp;&emsp;&ensp;&ensp;&ensp;: </b>{{retrieveLocationsInformation | ifIsNull}}</p>
					<p><b>Vehicles&emsp;&emsp;&emsp;&ensp;&ensp;: </b>{{retrieveVehiclesInformation | ifIsNull}}</p>
				</v-card-text>
				<v-divider></v-divider>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';

	export default {
		name: "MovieDetail",
		props: ['dialog', 'movie'],
		data() {
			return {
				species: []
			}
		},
		watch: {
			dialog() {
				this.$emit('dialogFromChild', this.dialog);
			}
		}, methods: {

			...mapActions(
				['fetchInformation', 'clearInformation', 'changeFetchStatus']
			)
		},
		computed: {
			...mapGetters(
				['getInformation', 'getFetchStatus']
			),
			retrieveSpeciesInformation() {
				return this.getInformation('species')
			},
			retrievePeopleInformation() {
				return this.getInformation('people')
			},
			retrieveLocationsInformation() {
				return this.getInformation('locations')
			},
			retrieveVehiclesInformation() {
				return this.getInformation('vehicles')
			},
			retrieveFetchStatus() {
				return this.getFetchStatus
			}
		}, created() {
			this.fetchInformation(this.movie.species);
			this.fetchInformation(this.movie.people);
			this.fetchInformation(this.movie.locations);
			this.fetchInformation(this.movie.vehicles);
		}, destroyed() {
			this.clearInformation();
			this.changeFetchStatus(false);
		}
	}
</script>

<style scoped>

</style>
