<template>
	<v-card class="myFooter" height="150"
	>
		<v-footer absolute
				  class="font-weight-medium"
				  color="rgba(0, 173, 239, 1)"
				  dark
		>
			<v-row align="center" justify="center">
				<v-img max-width="500px"
					   src="../assets/Studio_Ghibli_portal_logo.png"
					   v-if="!isMobile"
					   contain
				></v-img>
				<v-img max-width="250px" style="padding-top: 50px"
					   contain
					   src="../assets/Studio_Ghibli_portal_logo.png"
					   v-else
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
		name: "Footer",
		computed: {
			isMobile() {
				return this.$store.getters.getWidthScreen
			}
		}
	}
</script>

<style scoped>
	.myFooter {
		margin-top: 200px;
	}
</style>
