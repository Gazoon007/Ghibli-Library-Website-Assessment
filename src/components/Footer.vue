<template>
	<v-card color="rgba(0, 173, 239, 1)" height="150"
	>
		<v-footer absolute
				  class="font-weight-medium"
				  color="rgba(0, 173, 239, 1)"
				  dark
		>
			<v-col
					class="text-center"
					cols="12"
			>
				{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
			</v-col>
		</v-footer>
	</v-card>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>
	.myFooter {
		margin-top: 500px;
	}
</style>
