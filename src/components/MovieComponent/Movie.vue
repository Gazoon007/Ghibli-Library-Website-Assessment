<template>
	<v-col cols="12" md="4" sm="6">
		<v-card class="mx-auto" elevation="12" shaped>
			<v-img
					class="white--text align-end"
					height="200px"
					:src="sourceImage"
			>
			</v-img>
			<v-card-title>{{movie.title}}</v-card-title>

			<v-card-text class="text--primary" style="padding-bottom: 0">
				<VueReadMoreSmooth :lines="4" :no-shadow="true" :text="'Read Description More'"
								   :text-less="'Read Description Less'">
					<p>{{movie.description}}</p>
				</VueReadMoreSmooth>
			</v-card-text>

			<v-card-actions style="padding: 0 8px 0">
				<v-row>
					<v-col align="end" style="padding: 0 8px 8px">
						<v-btn
								@click="dialog = !dialog"
								color="rgba(25,25,112, 1)"
								text
						>
							More Information
						</v-btn>
					</v-col>
				</v-row>
			</v-card-actions>
		</v-card>
		<transition mode="out-in" name="slide">
			<app-movie-detail :dialog="dialog" :movie="movie" @dialogFromChild="dialogFromChild"
							  v-if="dialog"></app-movie-detail>
		</transition>
	</v-col>
</template>

<script>
	import VueReadMoreSmooth from "vue-read-more-smooth";
	import MovieDetail from "@/components/MovieComponent/MovieDetail";

	export default {
		data() {
			return {
				dialog: false,
				sourceImage: String
			}
		},
		props: ['movie', 'index'],
		name: "Home",
		components: {
			VueReadMoreSmooth,
			'appMovieDetail': MovieDetail
		}, methods: {
			dialogFromChild(value) {
				this.dialog = value;
			}
		}, created() {
			this.sourceImage = require('../../assets/' + this.index + '.jpg');
		}
	}
</script>


<style scoped>
	.slide-enter-active {
		animation: slide-in 1000ms ease-out forwards;
	}

	.slide-leave-active {
		animation: slide-out 1000ms ease-out forwards;
	}

	@keyframes slide-in {
		from {
			transform: translateY(+30px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(+30px);
			opacity: 0;
		}
	}
</style>
