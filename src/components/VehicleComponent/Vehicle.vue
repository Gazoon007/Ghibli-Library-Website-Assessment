<template>
	<v-col cols="12" md="4" sm="6">
		<v-card
				class="mx-auto"
				max-width="350"
		>
			<v-card-text>
				<p class="display-1 text--primary">
					{{vehicle.name}}
				</p>
				<p>{{vehicle.id}}</p>
				<div class="text--primary">
					<p><b>Description&emsp;&emsp;&emsp;: </b>{{vehicle.description}}</p>
					<p><b>Vehicle Class&emsp;&ensp;&ensp;: </b>{{vehicle.vehicle_class}}</p>
					<p><b>Length&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;: </b>{{vehicle.length}}</p>
				</div>
			</v-card-text>
		</v-card>
	</v-col>
</template>

<script>
	export default {
		props: ['vehicle']
	}
</script>

<style scoped>

</style>
