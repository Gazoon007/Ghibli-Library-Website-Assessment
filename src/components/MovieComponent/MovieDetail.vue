<template>
	<div class="text-center">
		<v-dialog
				v-model="dialog"
				width="400"
		>
			<!--			<template v-slot:activator="{ on }">-->
			<!--				<v-btn-->
			<!--						color="red lighten-2"-->
			<!--						dark-->
			<!--						v-on="on"-->
			<!--				>-->
			<!--					Click Me-->
			<!--				</v-btn>-->
			<!--			</template>-->

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
		watch: {
			dialog() {
				this.$emit('dialogFromChild', this.dialog);
			}
		}
	}
</script>

<style scoped>

</style>
