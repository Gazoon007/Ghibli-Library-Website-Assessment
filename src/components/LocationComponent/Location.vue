<template>
	<v-col cols="12" md="4" sm="6">
		<v-card
				class="mx-auto"
				max-width="344"
		>
			<v-card-text>
				<p class="display-1 text--primary">
					{{location.name}}
				</p>
				<p>{{location.id}}</p>
				<div class="text--primary">
					<p><b>Climate&emsp;&emsp;&emsp;&emsp; : </b>{{location.climate}}</p>
					<p><b>Terrain&emsp;&emsp;&emsp;&emsp;&ensp;: </b>{{location.terrain}}</p>
					<p><b>Surface Water&emsp; : </b>{{location.surface_water}}</p>
				</div>
			</v-card-text>
		</v-card>
	</v-col>
</template>

<script>
	export default {
		props: ['location']
	}
</script>

<style scoped>

</style>
