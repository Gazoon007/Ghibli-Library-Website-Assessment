<template>
	<v-col cols="12" md="4" sm="6">
		<v-card
				class="mx-auto"
				max-width="350"
		>
			<v-card-text>
				<p class="display-1 text--primary">
					{{species.name}}
				</p>
				<p>{{species.id}}</p>
				<div class="text--primary">
					<p><b>Classification&emsp;: </b>{{species.classification}}</p>
					<p><b>Eye Color&emsp;&emsp;&ensp;&ensp;: </b>{{species.eye_colors}}</p>
					<p><b>Hair Color&emsp;&emsp;&ensp; : </b>{{species.hair_colors}}</p>
				</div>
			</v-card-text>
		</v-card>
	</v-col>
</template>

<script>
	export default {
		props: ['species']
	}
</script>

<style scoped>

</style>
