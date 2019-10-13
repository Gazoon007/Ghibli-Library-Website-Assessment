<template>
	<div class="text-center">
		<v-dialog
				v-model="dialog"
				width="400"
				max-width="600"
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
		}, computed: {
			retrieveSpeciesInformation() {
				return this.$store.getters.getInformation('species')
			},
			retrievePeopleInformation() {
				return this.$store.getters.getInformation('people')
			},
			retrieveLocationsInformation() {
				return this.$store.getters.getInformation('locations')
			},
			retrieveVehiclesInformation() {
				return this.$store.getters.getInformation('vehicles')
			}
		}, created() {
			this.$store.dispatch('fetchInformation', this.movie.species);
			this.$store.dispatch('fetchInformation', this.movie.people);
			this.$store.dispatch('fetchInformation', this.movie.locations);
			this.$store.dispatch('fetchInformation', this.movie.vehicles);
		}, destroyed() {
			this.$store.dispatch('clearInformation')
		}
	}
</script>

<style scoped>

</style>
