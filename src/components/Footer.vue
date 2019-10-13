<template>
	<v-card height="150" class="myFooter"
	>
		<v-footer absolute
				  class="font-weight-medium"
				  color="rgba(0, 173, 239, 1)"
				  dark
		>
			<v-row align="center" justify="center">
				<v-img
						max-width="500px"
						src="../assets/Studio_Ghibli_portal_logo.png"
				></v-img>
			</v-row>

			<v-col
					align="center"
					class="text-center"
					cols="12"
			>
				{{ new Date().getFullYear() }} — <strong>M.F.A</strong>
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
		margin-top: 200px;
	}
</style>
